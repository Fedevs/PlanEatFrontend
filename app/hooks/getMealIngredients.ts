import { Ingredient } from "@/types/types";

export default async function getMealIngredients(
  id: number
): Promise<Ingredient[]> {
  const url = `${process.env.BASE_URL}meals/${id}/ingredients`;
  const res = await fetch(url);
  if (res.status !== 200) {
    throw new Error("Failed to fetch meal ingredients");
  }
  return res.json();
}
