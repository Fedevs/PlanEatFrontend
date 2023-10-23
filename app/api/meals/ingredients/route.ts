import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { mealId, ingredientId, quantity } = await request.json();
  try {
    const url = `${process.env.BASE_URL}/meals/${mealId}/ingredients`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredientId, quantity }),
    });

    const data = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error();
  }
}
