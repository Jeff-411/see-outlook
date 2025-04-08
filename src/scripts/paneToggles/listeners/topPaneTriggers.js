// addListenersTop.js
import { hideAllTargets } from '../../utilities/hideAllTargets.js'

const TIMEOUT_DURATION = 250
const TRIGGER_CLASS = '.custom-trigger-top'

export const addListenersTop = () => {
  let timeoutId

  const container = document.querySelector('#appContainer')
  if (!container) {
    console.error('Container #appContainer not found')
    return
  }

  const handleMouseEnter = event => {
    const trigger = event.target.closest(TRIGGER_CLASS)
    if (trigger) {
      const targetSelector = trigger.getAttribute('data-target')
      timeoutId = setTimeout(() => {
        try {
          const target = document.querySelector(targetSelector)
          if (target && target.classList.contains('hideMe')) {
            hideAllTargets()
            target.classList.remove('hideMe')
          }
        } catch (error) {
          console.error('Error showing target:', error)
        }
      }, TIMEOUT_DURATION)
    }
  }

  const handleMouseLeave = event => {
    const trigger = event.target.closest(TRIGGER_CLASS)
    if (trigger) {
      clearTimeout(timeoutId)
    }
  }

  const handleDocumentMouseOut = event => {
    if (!event.relatedTarget && event.clientY <= 0) {
      clearTimeout(timeoutId)
      hideAllTargets()
    }
  }

  container.addEventListener('mouseenter', handleMouseEnter, true)
  container.addEventListener('mouseleave', handleMouseLeave, true)
  document.addEventListener('mouseout', handleDocumentMouseOut)

  // Return a cleanup function
  return () => {
    container.removeEventListener('mouseenter', handleMouseEnter, true)
    container.removeEventListener('mouseleave', handleMouseLeave, true)
    document.removeEventListener('mouseout', handleDocumentMouseOut)
  }
}
