import { SHOW_SENDER } from './vars.js'
import { insertNewElement } from '../../utilities/index_utilities.js'

// insertDiv.js

// Insert a new container to display the sender's address.
export const insert_showSender = () => {
  const insertAt = '#app > div > :nth-child(1)'

  /**
   * (elementId, elementContent, insertionPoint, insertPosition)
   */
  insertNewElement(SHOW_SENDER.ID, '', insertAt, 'afterend')
}
