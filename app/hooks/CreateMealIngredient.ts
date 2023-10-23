import { mealIngredientInterface } from "@/types/types";

export default async function createMealIngredient({
  mealId,
  ingredientId,
  quantity,
}: mealIngredientInterface) {
  const url = "/api/meals/ingredients";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mealId, ingredientId, quantity }),
    });

    if (!response.ok) {
      throw new Error("There was an error adding ingredients to the meal");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
  }
}
