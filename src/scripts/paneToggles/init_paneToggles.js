import { insertTriggers } from './insertTriggers.js'
import { addListeners_triggers } from './listeners/addListeners.js'

export function init_paneToggles() {
  insertTriggers()
  addListeners_triggers()
  window.scrollTo(0, 0)
}
