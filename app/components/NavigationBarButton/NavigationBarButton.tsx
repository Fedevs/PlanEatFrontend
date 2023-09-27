import "./NavigationBarButton.scss";
import Image from "next/image";

interface NavigationBarButtonProps {
  imageOptions: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  text: string;
}

export default function NavigationBarButton(props: NavigationBarButtonProps) {
  return (
    <button className='navigation-bar-button flex-column'>
      <span className='icon'>
        <Image
          src={props.imageOptions.src}
          alt={props.imageOptions.alt}
          width={props.imageOptions.width || 20}
          height={props.imageOptions.height || 20}
        />
      </span>
      <span className='text'>{props.text}</span>
    </button>
  );
}
