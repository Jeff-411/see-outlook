import { SITE } from './ui/constants.js'
import { init_paneToggles } from './paneToggles/init_paneToggles.js'
import { hideAllTargets } from './utilities/hideAllTargets.js'
import { init_features } from './features/init_features.js'
import { init_storage } from './store/init_storage.js'

const disableReadPageZoom = () => {
  const observer = new MutationObserver(() => {
    const zoomContainer = document.querySelector(SITE.READ_PAGE)
    if (zoomContainer) {
      zoomContainer.addEventListener(
        'wheel',
        function (e) {
          if (e.ctrlKey) {
            e.preventDefault()
            e.stopPropagation()
          }
        },
        { passive: false }
      )
      observer.disconnect()
    }
  })
  observer.observe(document.body, { childList: true, subtree: true })
}

const init = () => {
  init_paneToggles() // Add the Toggle triggers to the DOM, then
  hideAllTargets() // hide all the Toggle targets.
  init_features()
  init_storage()
  disableReadPageZoom()
}

const isloaded_site = setInterval(() => {
  let siteHeader = document.querySelector(SITE.SITE_HEADER)
  let ribbon = document.querySelector(SITE.RIBBON)
  let navpane = document.querySelector(SITE.NAVPANE)
  let leftRail = document.querySelector(SITE.LEFT_RAIL)

  if (siteHeader && ribbon && navpane && leftRail) {
    clearInterval(isloaded_site)
    init()
  }
  // debug
  else console.log(`isloaded_site => Trying again...`)
}, 100)
