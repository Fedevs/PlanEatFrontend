import { MealTimesInterface } from "@/types/types";

export default async function getMealTimes(): Promise<MealTimesInterface[]> {
  const url = `${process.env.BASE_URL}/api/mealTimes`;
  try {
    const res = await fetch(url);
    if (res.status !== 200) {
      throw new Error("Failed to fetch meal times");
    }
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch meal times");
  }
}
