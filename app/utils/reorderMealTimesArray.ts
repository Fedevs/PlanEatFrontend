import { MealTimesInterface } from "@/types/types";

/**
 * Reorders the elements in an array based on the start and end indexes.
 * @param list - The original array of elements to be reordered.
 * @param startIndex - The index of the element being dragged.
 * @param endIndex - The index where the element is dropped.
 * @returns An array with reordered elements.
 */

export default function reorderMealTimesArray(
  list: Array<MealTimesInterface>,
  startIndex: number,
  endIndex: number
): MealTimesInterface[] {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  // Update the order of the elements in the array
  const sortedResult = result.map((item, index): MealTimesInterface => {
    return { ...item, order: index + 1 };
  });

  return sortedResult;
}
