import { FC } from "react";
import { ReactComponent as AboutIconSVG } from "../../assets/icon/about.svg";
import { IconProps } from "./types";

const AboutIcon: FC<IconProps> = ({ size, color }) => {
  return <AboutIconSVG width={size} height={size} color={color} />;
};

export default AboutIcon;
