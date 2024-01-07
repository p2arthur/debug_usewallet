import { sha512_256 } from 'js-sha512'

export interface ServiceWOrkerSubscription {
  endpoint: string
  keys: {
    p256dh: string
    auth: string
  }
}

export function urlBase64ToUint8Array(base64String: string) {
  var padding = '='.repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export function registerServiceWorker() {
  return navigator.serviceWorker
    .register('/notifications/service-worker.js')
    .then(function (registration) {
      return registration;
    })
    .catch(function (err) {
      console.error('Unable to register service worker.', err);
    });
}

export function askPermission() {
  return new Promise(function (resolve, reject) {
    const permissionResult = Notification.requestPermission(function (result) {
      resolve(result);
    });

    if (permissionResult) {
      permissionResult.then(resolve, reject);
    }
  }).then(function (permissionResult) {
    if (permissionResult !== 'granted') {
      throw new Error("We weren't granted permission.");
    }
  });
}

export function subscribeUserToPush() {
  return navigator.serviceWorker
    .register('/notifications/service-worker.js')
    .then(function (registration) {
      const subscribeOptions = {
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          'BPQGghNeLKm3KcjNmvvU9o0LrpJs8t_qmgfa8xiuSxpGLor7TOg_b54lS1wUJHietvxEgaNBe7E7TAlMrWKiVxE',
        ),
      };

      return registration.pushManager.subscribe(subscribeOptions);
    })
    .then(function (pushSubscription) {
      return pushSubscription;
    });
}

export function checkServiceWorkerRegistration () {
  return navigator.serviceWorker.getRegistration('/notifications/service-worker.js').then((serviceWorkerRegistration) => {

    if (!serviceWorkerRegistration) {
      return null
    }

    return serviceWorkerRegistration.pushManager.getSubscription().then((subscription) => {
      return subscription
    })
  })
}

export function createSubscriptionHash (sub: ServiceWOrkerSubscription) {
  return sha512_256(JSON.stringify(sub))
}

export async function setWebNotifications () {

  // register worker
  await registerServiceWorker()

  // get permission
  await askPermission()

  // sub to web push
  const subscription = await subscribeUserToPush()

  return {
    hash: createSubscriptionHash({
      endpoint: subscription.endpoint,
      keys: subscription.toJSON().keys as ServiceWOrkerSubscription['keys']
    }),
    userAgent: navigator.userAgent,
    endpoint: subscription.endpoint,
    keys: subscription.toJSON().keys as ServiceWOrkerSubscription['keys']
  }
}

export async function unsubscribe () {
  return navigator.serviceWorker.getRegistration('/notifications/service-worker.js').then((serviceWorkerRegistration) => {

    if (!serviceWorkerRegistration) {
      return false
    }

    return serviceWorkerRegistration.pushManager.getSubscription().then((subscription) => {
      
      if (!subscription) {
        return false
      }

      return subscription.unsubscribe().then(() => {
        return serviceWorkerRegistration.unregister().then(() => {
          return true
        }).catch((err) => {
          return false
        })
      }).catch((err) => {
        return false
      })

    }).catch((err) => {
      return false
    })
  })
}