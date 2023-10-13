import { MealTimesInterface } from "@/types/types";

export default async function getMealTimes(): Promise<MealTimesInterface[]> {
  const res = await fetch("/api/mealTimes");
  if (res.status !== 200) {
    throw new Error("Failed to fetch meal times");
  }
  return res.json();
}
