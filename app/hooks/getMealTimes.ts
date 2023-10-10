import { MealTimesInterface } from "@/types/types";

export default async function getMealTimes(): Promise<MealTimesInterface[]> {
  const url = `${process.env.BASE_URL}mealTimes`;
  const res = await fetch(url);
  if (res.status !== 200) {
    throw new Error("Failed to fetch meal times");
  }
  return res.json();
}
