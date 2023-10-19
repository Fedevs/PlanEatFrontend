import CloseIcon from "@/public/icons/close-icon.svg";
import "./Tags.scss";

interface TagsProps {
  id: number;
  name: string;
  onDelete: (id: number) => void;
}

export default function Tags(props: TagsProps) {
  return (
    <div
      className='tags flex justify-start p-1 ml-1 gap-1'
      onClick={() => props.onDelete(props.id)}
    >
      <span>{props.name}</span>
      <div className='icon-container flex'>
        <CloseIcon />
      </div>
    </div>
  );
}
