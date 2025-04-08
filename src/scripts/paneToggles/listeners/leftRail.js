// leftRail.js
import { SITE, TRIGGERS } from '../../ui/constants.js'
import { hideAllTargets } from '../../utilities/hideAllTargets.js'
export const addListenersRail = () => {
  const trigger = document.querySelector(TRIGGERS.LEFT_RAIL)
  const rail = document.querySelector(SITE.LEFT_RAIL)

  const isRailOpen = () => {
    const targ = document.querySelector(SITE.LEFT_RAIL)

    return window.getComputedStyle(targ).getPropertyValue('display') === 'flex'
  }

  const hide = e => {
    const rect_trigger = trigger.getBoundingClientRect()
    const rect_targ = rail.getBoundingClientRect()

    if (
      e.clientX > rect_targ.right ||
      e.clientY <= rect_trigger.top ||
      (e.clientX < rect_targ.left && e.clientY >= rect_trigger.bottom)
    ) {
      document.querySelector(SITE.LEFT_RAIL).style.display = 'none'
      document.removeEventListener('mousemove', hide)
    }
  }

  const show = () => {
    console.log(`show reached`)
    console.log(`isRailOpen: ${isRailOpen}`)

    if (!isRailOpen()) {
      hideAllTargets()
      rail.style.display = 'flex'
      document.addEventListener('mousemove', hide)
    }
  }

  trigger.addEventListener('mouseenter', show)
}
