export default async function getPlanners() {
  const url = `${process.env.BASE_URL}planners`;
  const res = await fetch(url);
  if (res.status !== 200) {
    throw new Error("Failed to fetch planners");
  }
  return res.json();
}
