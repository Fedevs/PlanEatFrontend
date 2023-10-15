import getPlanners from "@/app/hooks/getPlanners";
import { PlannerInterface } from "@/types/types";
import PlannerCard from "@/app/components/PlannerCard/PlannerCard";
import "./planners.scss";

export default async function Planners() {
  const planners = await getPlanners();
  const test = [...planners, ...planners];

  return (
    <section className='planners my-3 h-100'>
      {test.map((planner: PlannerInterface) => (
        <PlannerCard key={planner.id} {...planner} />
      ))}
    </section>
  );
}
