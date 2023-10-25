// proxy

export async function GET(): Promise<Response> {
  const url = `${process.env.BASE_API_URL}mealTimes`;
  try {
    const fetchedData = await fetch(url);
    const data = await fetchedData.json();
    return Response.json(data);
  } catch (error) {
    return Response.json(error);
  }
}
