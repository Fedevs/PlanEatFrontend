import { PlannerInterface } from "@/types/types";
import Button, { ButtonProps } from "@/app/components/Button/Button";
import PlannerCardDatesContainer from "@/app/components/PlannerCardDatesContainer/PlannerCardDatesContainer";
import "./PlannerCard.scss";

export default function PlannerCard(props: PlannerInterface) {
  const editButtonProps: ButtonProps = {
    action: "edit",
    svgOptions: {
      height: 24,
      width: 24,
    },
    ariaLabel: "Change any attribute from the planner",
    title: "Edit planner",
  };
  const closeButtonProps: ButtonProps = {
    action: "close",
    svgOptions: {
      height: 24,
      width: 24,
    },
    ariaLabel: "Remove the planner from the list",
    title: "Delete planner",
  };

  // Mock until we have it in DB
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia molestias aliquam quam nobis iusto fugiat quis dolore? Ratione quod quibusdam inventore, blanditiis itaque ipsam sed necessitatibus quos eligendi nobis.";
  return (
    <div className='planner-card mx-2 my-5'>
      <div className='icons-container flex justify-end'>
        <div className='btn-wrapper flex justify-end'>
          <Button {...editButtonProps} />
        </div>
        <div className='btn-wrapper flex justify-end'>
          <Button {...closeButtonProps} />
        </div>
      </div>
      <div className='planner-card-wrapper flex-column justify-start h-100 w-100'>
        <h2 className='title mt-0'>{props.name}</h2>
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
