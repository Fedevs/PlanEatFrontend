import { MealInterface } from "@/types/types";

export default async function getMeals(): Promise<MealInterface[]> {
  const url = `${process.env.BASE_API_URL}meals?pageSize=20`;
  const res = await fetch(url);
  if (res.status !== 200) {
    throw new Error("Failed to fetch meals");
  }
  return res.json();
}
