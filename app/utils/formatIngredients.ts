import { IngredientInterface } from "@/types/types";
import truncateString from "./truncateString";

/**
 * Format an array of ingredients into a comma-separated string with truncation if needed.
 *
 * @param {Array<IngredientInterface>} ingredients - An array of Ingredient objects.
 * @returns {string} - The formatted string with ellipsis if needed.
 */
export default function formatIngredients(
  ingredients: Array<IngredientInterface>
): string {
  const maxLength = 100;
  let currentLength = 0;

  const mock = [
    { name: "this" },
    { name: "is" },
    { name: "a" },
    { name: "mock" },
    { name: "to" },
    { name: "test" },
    { name: "the" },
    { name: "truncated" },
    { name: "ingredients" },
    { name: "please" },
    { name: "delete" },
    { name: "when" },
    { name: "deploying" },
    { name: "this" },
    { name: "is" },
    { name: "a" },
    { name: "mock" },
    { name: "to" },
    { name: "test" },
    { name: "the" },
    { name: "truncated" },
    { name: "ingredients" },
    { name: "please" },
    { name: "delete" },
    { name: "when" },
    { name: "deploying" },
    { name: "this" },
    { name: "is" },
    { name: "a" },
    { name: "mock" },
    { name: "to" },
    { name: "test" },
    { name: "the" },
    { name: "truncated" },
    { name: "ingredients" },
    { name: "please" },
    { name: "delete" },
    { name: "when" },
    { name: "deploying" },
    { name: "this" },
    { name: "is" },
    { name: "a" },
    { name: "mock" },
    { name: "to" },
    { name: "test" },
    { name: "the" },
    { name: "truncated" },
    { name: "ingredients" },
    { name: "please" },
    { name: "delete" },
    { name: "when" },
    { name: "deploying" },
  ];

  const ingredientNames = mock
    .map((ingredient) => ingredient.name)
    .filter((name) => {
      if (currentLength + name.length <= maxLength) {
        return (currentLength += name.length);
      }
    });
  const formattedString = ingredientNames.join(", ");

  return truncateString(formattedString, maxLength);
}
