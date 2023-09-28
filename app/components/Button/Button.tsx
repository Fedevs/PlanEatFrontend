"use client";

import EditIcon from "@/public/icons/edit-icon.svg";
import CloseIcon from "@/public/icons/close-icon.svg";
import "./Button.scss";

type buttonAction = "edit" | "close";

interface svgOptions {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

export interface ButtonProps {
  action: buttonAction;
  svgOptions?: svgOptions;
  onClick?: () => void;
  styles?: object;
  ariaLabel: string;
  title: string;
}

export default function Button(props: ButtonProps): JSX.Element {
  const handleClickMock = () => console.log(`${props.title} button clicked`);

  return (
    <button
      aria-label={props.ariaLabel}
      title={props.title}
      className='button flex justify-around'
      style={props.styles}
      onClick={props.onClick || handleClickMock}
    >
      {props.action === "edit" ? (
        <EditIcon {...props.svgOptions} />
      ) : (
        <CloseIcon {...props.svgOptions} />
      )}
    </button>
  );
}
