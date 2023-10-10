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

export interface MealTimesInterface {
  id: string;
  name: string;
}

interface mealIngredient {
  mealId: number;
  ingredientId: number;
  quantity: number;
}

export interface Ingredient {
  id: number;
  name: string;
  unit: string;
  mealIngredient: mealIngredient;
}
