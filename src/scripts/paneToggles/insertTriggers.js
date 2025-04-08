// insertTriggers.js
import { insertNewElement } from '../utilities/insertNewElement.js'

export function insertTriggers() {
  const topTriggers = `
    <div id="trigger-ribbon" class="custom-trigger-top" data-target="[aria-label='Ribbon']"></div>
    <div id="trigger-siteHeader" class="custom-trigger-top" data-target="#o365header"></div>
  `
  const leftTriggers = `
    <div id="trigger-navpane" class="custom-trigger-left" data-target="[aria-label='Navigation pane']"></div>
    <div id="trigger-leftRail" class="custom-trigger-left" data-target="#LeftRail"></div>
  `
  const insertAt = '#app > div > :nth-child(1)'
  const insertWhere = 'afterend'

  /**
   * (elementId, elementContent, insertionPoint, insertPosition)
   */
  insertNewElement('custom_menu-top', topTriggers, insertAt, insertWhere)
  insertNewElement('custom_menu-left', leftTriggers, insertAt, insertWhere)
}
