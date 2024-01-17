self.addEventListener('push', function(event) {

  if (event.data) {
    const data = event.data.json()

    const promiseChain = self.registration.showNotification(data.title,{
      body: data.body,
      icon: data.icon,
      badge: data.badge,
      data: {
        url: data.url
      }
    })
  
    event.waitUntil(promiseChain);
  } else {
    return
  }
})

self.addEventListener('notificationclick', (event) => {
  const url = event.notification.data.url

  event.notification.close();

  event.waitUntil(
    clients.matchAll({type: 'window'}).then( windowClients => {
      // Check if there is already a window/tab open with the target URL
      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i];
        // If so, just focus it.
        if (client.url === url && 'focus' in client) {
          return client.focus();
        }
      }
      // If not, then open the target URL in a new window/tab.
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
  })
  )
});