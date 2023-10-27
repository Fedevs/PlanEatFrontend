import { MealInterface } from "@/types/types";

export default async function getMeals(): Promise<MealInterface[]> {
  const url = `${process.env.BASE_API_URL}meals?pageSize=20`;
  try {
    const res = await fetch(url, { cache: "no-cache" });
    if (res.status !== 200) {
      throw new Error("Failed to fetch meals");
    }
    return res.json();
  } catch (error) {
    throw new Error("failed getting meals");
  }
}
