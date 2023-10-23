import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name } = await request.json();
  try {
    const url = `${process.env.BASE_URL}meals`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    const data = await response.json();
    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error();
  }
}
