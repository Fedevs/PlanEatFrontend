import formatDate from "@/app/utils/formatDate";
import "./PlannerCardDatesContainer.scss";

interface PlannerCardDatesContainerProps {
  startDate: string;
  finishDate: string;
}

export default function PlannerCardDatesContainer(
  props: PlannerCardDatesContainerProps
) {
  return (
    <div className='planner-card-dates-container'>
      <div className='flex-column justify-evenly h-100'>
        <p className='dates m-0'>
          <strong>{formatDate(`${props.startDate}`)}</strong>
        </p>
        <div className='lane my-1'></div>
        <p className='dates m-0'>
          <strong>{formatDate(`${props.finishDate}`)}</strong>
        </p>
      </div>
    </div>
  );
}
