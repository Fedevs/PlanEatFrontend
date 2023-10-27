/**
 * Removes an item from an array and returns the new array.
 * @param {any[]} array - The array from which the item will be removed.
 * @param {any} item - The item to be removed from the array.
 * @returns {any[]} The new array with the item removed.
 */
export function removeItemFromArray(array: any[], item: any): any[] {
  return array.filter((element) => element !== item);
}

/**
 * Removes specified items from an array and returns a new array.
 * @param array - The array from which to remove items.
 * @param items - An array of items to remove from the original array.
 * @returns A new array with the specified items removed.
 */
export function removeItemsFromArray(array: any[], items: any[]): any[] {
  return array.filter((element) => !items.includes(element));
}
