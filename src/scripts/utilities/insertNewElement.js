// insertNewElement.js

export const insertNewElement = (elementId, elementContent, insertionPoint, insertPosition) => {
  const newElement = document.createElement('div')
  newElement.id = elementId
  newElement.innerHTML = elementContent

  document.querySelector(insertionPoint).insertAdjacentElement(insertPosition, newElement)
}
