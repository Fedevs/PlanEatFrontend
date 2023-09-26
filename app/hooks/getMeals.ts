export default async function getMeals() {
  const url = `${process.env.BASE_URL}meals`;
  const res = await fetch(url);
  if (res.status !== 200) {
    throw new Error("Failed to fetch meals");
  }
  return res.json();
}
