import { SITE } from '../ui/constants.js'

export const hideAllTargets = () => {
  const siteHeader_header = document.querySelector(SITE.SITE_HEADER)
  const siteHeader_callout1 = document.querySelector('div.ms-Layer:has(label[title="Search in"])') // [1]
  const ribbon = document.querySelector(SITE.RIBBON)
  const leftRail = document.querySelector(SITE.LEFT_RAIL)
  const navHideBtn = document.querySelector(SITE.RIBBON__NAVPANE_HIDE_BTN)

  siteHeader_header.classList.add('hideMe')
  if (siteHeader_callout1) siteHeader_callout1.style.display = 'none'
  ribbon.classList.add('hideMe')

  leftRail.style.display = 'none'

  if (navHideBtn) navHideBtn.click()

  window.scrollTo(0, 0)

  /** [1]
   * site header... > #owaSearchBox... > #filtersButtonId => callout */
}
