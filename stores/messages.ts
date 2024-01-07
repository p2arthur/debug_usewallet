import { generateUUID } from "@/functions/math/MathUtils"

// export enum MessageType {
//   ERROR="ERROR",
//   WARNING="WARNING",
//   SUCCES="SUCCES",
//   INFO="INFO"
// }

// export enum MessageCardType {
//   SNACKBAR="SNACKBAR"
// }

export const MESSAGE_CARD_TYPE = {
  SNACKBAR: 'Snackbar'
}

export const MESSAGE_TYPE = {
  ERROR: 'Error',
  WARNING: 'Warning',
  SUCCESS: 'Success',
  INFO: 'Info'
}

export type MessageType = keyof typeof MESSAGE_TYPE
export type MessageCardType = keyof typeof MESSAGE_CARD_TYPE

export interface Message {
  id: string
  type: MessageType
  cardType: MessageCardType 
  title: string
  details: string
  autoRemove?: boolean
  duration?: number
  timeout?: NodeJS.Timeout
}

export const useMessageStore = defineStore('messages', {
  state: () => {
    return {
      messages: [] as Array<Message>
    }
  },

  actions: {
    pushMessage (message: Omit<Message, "id">) {

      const id = generateUUID()
      let timeout

      if (message.autoRemove) {
        timeout = setTimeout(() => {
          const index = this.messages.findIndex((m) => m.id === id)
          this.messages.splice(index, 1)
        }, message.duration || 5000)
      }

      this.messages.push({
        ...message,
        id: id,
        timeout: timeout,
      })
    },

    removeMessage (id: string) {
      const index = this.messages.findIndex((m) => m.id === id)

      if (index < 0) {
        return
      }

      if (this.messages[index].timeout) {
        clearTimeout(this.messages[index].timeout)
      }

      this.messages.splice(index, 1)
    },

    pushSnackError (details: string) {
      this.pushMessage({
        type: 'ERROR',
        title: '',
        details: details,
        cardType: 'SNACKBAR',
        autoRemove: true
      })
    },

    pushSnackSucces (details: string) {
      this.pushMessage({
        type: 'SUCCESS',
        title: '',
        details: details,
        cardType: 'SNACKBAR',
        autoRemove: true
      })
    }
  }
})