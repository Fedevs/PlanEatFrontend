import PlannerCard from "@/app/components/PlannerCard/PlannerCard";
import { PlannerInterface } from "@/types/types";
import getPlanners from "../hooks/getPlanners";

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
