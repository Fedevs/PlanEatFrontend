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
  id: number;
  name: string;
  order?: number;
}

export interface mealIngredientInterface {
  mealId: number;
  ingredientId: number;
  quantity: number;
}

export interface IngredientInterface {
  id: number;
  name: string;
  unit: string;
  quantity?: number;
  mealIngredient?: mealIngredientInterface;
}
