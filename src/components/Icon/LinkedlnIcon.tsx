import { FC } from "react";
import { ReactComponent as LinkedlnIconSVG } from "../../assets/icon/linkding.svg";
import { IconProps } from "./types";

const LinkedlnIcon: FC<IconProps> = ({ size, color }) => {
  return <LinkedlnIconSVG width={size} height={size} color={color} />;
};

export default LinkedlnIcon;
