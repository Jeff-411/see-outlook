// navpane.js
import { SITE, TRIGGERS } from '../../ui/constants.js'
import { hideAllTargets } from '../../utilities/hideAllTargets.js'

export const addListenersNav = () => {
  const trigger = document.querySelector(TRIGGERS.NAVPANE)
  const navpane = document.querySelector(SITE.NAVPANE)

  const isNavOpen = () => !!document.querySelector(SITE.RIBBON__NAVPANE_HIDE_BTN)

  const show = () => {
    if (!isNavOpen()) {
      hideAllTargets()
      document.querySelector(SITE.RIBBON__NAVPANE_SHOW_BTN)?.click()
      document.addEventListener('mousemove', hide)
    }
  }

  const hide = e => {
    if (isNavOpen()) {
      const rect_trigger = trigger.getBoundingClientRect()
      const rect_targ = navpane.getBoundingClientRect()

      if (
        e.clientX > rect_targ.right ||
        e.clientY <= rect_trigger.top ||
        (e.clientX < rect_targ.left && e.clientY >= rect_trigger.bottom)
      ) {
        document.querySelector(SITE.RIBBON__NAVPANE_HIDE_BTN)?.click()
        document.removeEventListener('mousemove', hide)
      }
    }
  }

  trigger.addEventListener('mouseenter', show)
}
