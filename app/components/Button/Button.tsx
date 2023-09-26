"use client";

import "./Button.scss";
import Image from "next/image";

interface imageOptions {
  src: string;
  alt: string;
  height: number;
  width: number;
}

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  styles?: object;
  image?: imageOptions;
  ariaLabel?: string;
  title?: string;
}

export default function Button(props: ButtonProps) {
  const handleClickMock = () => console.log("button clicked");

  return (
    <button
      aria-label={props.ariaLabel}
      title={props.title}
      className='button flex justify-around'
      style={props.styles}
      onClick={props.onClick || handleClickMock}
    >
      {props.text && <p>{props.text}</p>}
      {props.image && <Image {...props.image} alt={props.image.alt} />}
    </button>
  );
}
