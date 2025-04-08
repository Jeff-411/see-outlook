import { insert_showSender } from './insert_showSender.js'
import { addListeners_showSender } from './addListeners.js'

export const init_showSender = () => {
  insert_showSender()
  addListeners_showSender()
}
