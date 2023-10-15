import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import MealTimeCard from "@/app/components/MealTimeCard/MealTimeCard";
import { MealTimesInterface } from "@/types/types";
import "./MealTimeCardWithDnd.scss";

interface MealTimeCardWithDndProps {
  mealTime: MealTimesInterface;
  index: number;
  handleDrop: (dragIndex: number, hoverIndex: number) => void;
}

type DragItem = {
  index: number;
  type: string;
};

export default function MealTimeCardWithDnd({
  mealTime,
  index,
  handleDrop,
}: MealTimeCardWithDndProps) {
  /*
  For my future self
    useDrag --> is to initiate dragging of a specific item.
    type --> specifies the type of the dragged item.
    item --> defines the data that is transferred during the drag, including the index and type of the item.
    collect --> is a function that collects information about the drag state; in this case, it's used to check if the item is being dragged.
   */
  const [{ isDragging }, drag, preview] = useDrag({
    type: "mealTimeCard",
    item: { index, type: "mealTimeCard" } as DragItem,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  /*
      useDrop --> is used to define an area where dragged items can be dropped.
      accept --> specifies the type of item that can be dropped in this area.
      hover --> defines the behavior when an item is dragged and hovers over the drop area. Here, the logic for reordering items is implemented.
      */
  const [, drop] = useDrop({
    accept: "mealTimeCard",
    /*
        item: DragItem --> is the item being dragged, and it contains information such as the index and type of the dragged item.
        monitor --> is an object that provides information about the drag and drop state, such as the client offset.
      */
    hover(item: DragItem, monitor) {
      // cardRef --> is used to reference the DOM element being dragged.
      if (!cardRef.current) {
        return;
      }
      /*
        dragIndex stores the index of the dragged item, 
        while hoverIndex represents the index of the hovered item.
        */
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      // calculates the position and dimensions of the card being hovered over.
      const hoverBoundingRect = cardRef.current.getBoundingClientRect();
      //  calculates the middle position of the hovered card along the Y-axis
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // stores the current position of the cursor.
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) {
        return;
      }
      // calculates the vertical position of the cursor relative to the hovered card.
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // check whether the dragged item is moving up or down relative to the hovered item
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // handle the reordering logic when the dragged item is dropped at the new position.
      handleDrop(dragIndex, hoverIndex);
      // updates the index of the dragged item
      item.index = hoverIndex;
    },
  });
  // useRef creates a mutable object that persists throughout the lifetime of the component.
  const opacity = isDragging ? 0.5 : 1;
  const cardRef = useRef<HTMLDivElement>(null);

  drag(drop(cardRef));

  return (
    <div ref={cardRef} style={{ opacity }} className='w-100 flex'>
      <MealTimeCard {...mealTime} />
    </div>
  );
}
