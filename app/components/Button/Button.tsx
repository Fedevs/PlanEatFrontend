"use client";

import "./Button.scss";
import { useEffect, useState } from "react";

interface svgOptions {
  content: string;
  height: number;
  width: number;
}

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  styles?: object;
  svg?: svgOptions;
  ariaLabel?: string;
  title?: string;
}

interface SvgIconProps extends React.SVGAttributes<SVGElement> {}

export default function Button(props: ButtonProps): JSX.Element {
  const [DynamicIcon, setDynamicIcon] = useState<React.FC<SvgIconProps> | null>(
    null
  );

  useEffect(() => {
    import(`@/public/icons/${props.svg?.content}-icon.svg`).then((module) => {
      setDynamicIcon(() => module.default);
    });
  }, [props.svg?.content]);
  const handleClickMock = () => console.log(`${props.title} button clicked`);

  return (
    <button
      aria-label={props.ariaLabel}
      title={props.title}
      className='button flex justify-around'
      style={props.styles}
      onClick={props.onClick || handleClickMock}
    >
      {props.text && <p>{props.text}</p>}
      {DynamicIcon && <DynamicIcon {...props.svg} />}
    </button>
  );
}
