import { SHOW_SENDER } from './vars.js'
import { SITE } from '../../ui/constants.js'

export const addListeners_showSender = () => {
  const container = document.getElementById(SHOW_SENDER.ID)
  const messageList = document.querySelector(SITE.INBOX_MESSAGE_LIST)

  const folders = {
    ignoreFolder: pathname => {
      if (
        pathname.includes('drafts') ||
        pathname.includes('sentitems') ||
        pathname.includes('notes') ||
        pathname.includes('group') ||
        pathname.includes('persons')
      )
        return true

      return false
    },
  }

  messageList.addEventListener(
    'mouseenter',
    e => {
      /**
       * If the mouse hasn't entered a sender element */
      if (!e.target.className.includes(SITE.INBOX_SENDER)) return

      /**
       * If the current folder has no useful sender info
       * (e.g. Drafts/Sent Items/etc) */
      if (folders.ignoreFolder(document.location.pathname)) return

      /**
       * If the element's title is part of an email address */
      if (e.target.children[0].title.includes('@')) {
        container.style.display = 'block'
        container.innerHTML = e.target.children[0].title
      }

      e.target.addEventListener('mouseleave', () => (container.style.display = 'none'))
    },
    true
  )
}
