import "./PlannerCard.scss";
import Button, { ButtonProps } from "@/app/components/Button/Button";
import PlannerCardDatesContainer from "@/app/components/PlannerCardDatesContainer/PlannerCardDatesContainer";
import { PlannerInterface } from "@/types/types";

export default function PlannerCard(props: PlannerInterface) {
  const editButtonProps: ButtonProps = {
    action: "test error",
    svgOptions: {
      height: 16,
      width: 16,
    },
    ariaLabel: "Change any attribute from the planner",
    title: "Edit planner",
  };
  const closeButtonProps: ButtonProps = {
    action: "close",
    svgOptions: {
      height: 16,
      width: 16,
    },
    ariaLabel: "Remove the planner from the list",
    title: "Delete planner",
  };

  // Mock until we have it in DB
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia molestias aliquam quam nobis iusto fugiat quis dolore? Ratione quod quibusdam inventore, blanditiis itaque ipsam sed necessitatibus quos eligendi nobis.";
  return (
    <div className='planner-card mx-2 my-5'>
      <div className='icons-container flex p-1'>
        <Button {...editButtonProps} />
        <Button {...closeButtonProps} />
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
