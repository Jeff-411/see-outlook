// handleLocalStorage.js
export const handleLocalStorage = userPreferences => {
  // Are the user's preferences saved in the browser?
  localStorage.getItem('userPreferences') === null
    ? // If not, save them to local storage
      localStorage.setItem('userPreferences', JSON.stringify(userPreferences))
    : // Otherwise, get them from the browser.
      (userPreferences = JSON.parse(localStorage.getItem('userPreferences')))
}
