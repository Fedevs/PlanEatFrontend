import PlannerCard from "@/app/components/PlannerCard/PlannerCard";
import { PlannerInterface } from "@/types/types";

async function getPlanners() {
  const url = `${process.env.BASE_URL}planners`;
  const res = await fetch(url);
  if (res.status !== 200) {
    throw new Error("Failed to fetch planners");
  }
  return res.json();
}

export default async function Planners() {
  const planners = await getPlanners();

  return (
    <section className='mt-3'>
      {planners.map((planner: PlannerInterface) => (
        <PlannerCard key={planner.id} {...planner} />
      ))}
    </section>
  );
}
