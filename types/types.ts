export interface PlannerInterface {
  id: number;
  name: string;
  startDate: string;
  finishDate: string;
}

export interface MealInterface {
  id: number;
  name: string;
}

interface mealIngredientInterface {
  mealId: number;
  ingredientId: number;
  quantity: number;
}

export interface IngredientInterface {
  id: number;
  name: string;
  unit: string;
  mealIngredient: mealIngredientInterface;
}
