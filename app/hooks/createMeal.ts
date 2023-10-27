export default async function createMeal(name: string) {
  const url = "/api/meals/create";

  try {
    const response = await fetch(url, {
      method: "POST",

      body: JSON.stringify({ name }),
    });

    if (!response.ok) {
      throw new Error("There was an error creating the meal");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
  }
}
