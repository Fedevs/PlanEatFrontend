import { IngredientInterface } from "@/types/types";

export default async function getAllIngredients(): Promise<
  IngredientInterface[]
> {
  const url = "/api/ingredients";
  const res = await fetch(url);
  if (res.status !== 200) {
    throw new Error("Failed to fetch ingredients");
  }
  return res.json();
}
