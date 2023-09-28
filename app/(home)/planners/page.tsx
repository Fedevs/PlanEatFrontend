import getPlanners from "@/app/hooks/getPlanners";
import { PlannerInterface } from "@/types/types";
import PlannerCard from "@/app/components/PlannerCard/PlannerCard";

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
