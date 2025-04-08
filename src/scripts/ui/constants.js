export const SITE = {
  SITE_HEADER: '#o365header',
  NAVPANE: 'div[aria-label="Navigation pane"]', // #MainModule > div > div > :nth-child(1)
  RIBBON: '[aria-label="Ribbon"]',
  RIBBON__NAVPANE_TOGGLE_BUTTON: '.ms-Button.Se2hy.ms-Button--commandBar',
  RIBBON__NAVPANE_SHOW_BTN: 'button[aria-label="Show navigation pane"]',
  RIBBON__NAVPANE_HIDE_BTN: 'button[aria-label="Hide navigation pane"]',
  LEFT_RAIL: '#LeftRail',

  INBOX_MESSAGE_LIST: '[aria-label="Message list"]',
  INBOX_SENDER: 'gy2aJ Ejrkd',
  READ_PAGE: '.Q8TCC.yyYQP.customScrollBar',
}

export const TRIGGERS = {
  // top (left to right)
  RIBBON: '#trigger-ribbon',
  PAGE_MENUS: '#trigger-pageMenus',
  SITE_HEADER: '#trigger-siteHeader',
  PREFERENCES: '#trigger-preferences',

  // left (top to bottom)
  NAVPANE: '#trigger-navpane',
  LEFT_RAIL: '#trigger-leftRail',
}
