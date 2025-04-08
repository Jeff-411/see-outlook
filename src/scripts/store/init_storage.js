import { userPreferences } from './userPreferences.js'
import { handleLocalStorage } from './handleLocalStorage.js'
import { clearStorage } from './clearStorage.js'

let debug = false

export const init_storage = () => {
  debug ? clearStorage() : handleLocalStorage(userPreferences)
}
