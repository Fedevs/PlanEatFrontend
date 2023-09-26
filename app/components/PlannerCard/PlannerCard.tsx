import "./PlannerCard.scss";
import Button from "@/app/components/Button/Button";
import PlannerCardDatesContainer from "@/app/components/PlannerCardDatesContainer/PlannerCardDatesContainer";
import { PlannerInterface } from "@/types/types";
import closeIcon from "@/public/icons/close-icon.svg";
import editIcon from "@/public/icons/edit-icon.svg";

export default function PlannerCard(props: PlannerInterface) {
  const closeButtonImageOptions = {
    height: 16,
    width: 16,
    src: closeIcon,
    alt: "Delete planner",
    ariaLabel: "Remove the planner from the list",
    title: "Delete planner",
  };
  const editButtonImageOptions = {
    height: 16,
    width: 16,
    src: editIcon,
    alt: "Edit planner",
    ariaLabel: "Change any attribute from the planner",
    title: "Edit planner",
  };
  // Mock until we have it in DB
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia molestias aliquam quam nobis iusto fugiat quis dolore? Ratione quod quibusdam inventore, blanditiis itaque ipsam sed necessitatibus quos eligendi nobis.";
  return (
    <div className='planner-card mx-2 my-5'>
      <div className='icons-container flex p-1'>
        <Button image={editButtonImageOptions} />
        <Button image={closeButtonImageOptions} />
      </div>
      <div className='planner-card-wrapper flex-column justify-start h-100 w-100'>
        <h2 className='title'>{props.name}</h2>
        <p
          title={description}
          className='short-description align-self-start m-0 p-1 w-50'
        >
          {description}
        </p>
      </div>
      <div className='planner-card-dates'>
        <PlannerCardDatesContainer
          startDate={props.startDate}
          finishDate={props.finishDate}
        />
      </div>
    </div>
  );
}
