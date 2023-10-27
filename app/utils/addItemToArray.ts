/**
 * Adds an element to an array and returns the new array.
 * @param {any[]} array - The array to which the element will be added.
 * @param {any} element - The element to be added to the array.
 * @returns {any[]} The new array with the added element.
 */
export default function addItemToArray(array: any[], element: any) {
  return [...array, element];
}
