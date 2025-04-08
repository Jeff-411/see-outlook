import { addListenersTop } from './topPaneTriggers.js'
import { addListenersNav } from './navpane.js'
// import { addListenersRail } from './leftRail.js'

// addListeners.js
export const addListeners_triggers = () => {
  addListenersTop()
  addListenersNav()
  // addListenersRail() // By user request: `#LeftRail{display: none;)`
}
