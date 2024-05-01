import { FC } from "react";
import { ReactComponent as PhoneIconSVG } from "../../assets/icon/call-icon.svg";
import { IconProps } from "./types";

const PhoneIcon: FC<IconProps> = ({ size, color }) => {
  return <PhoneIconSVG width={size} height={size} color={color} />;
};

export default PhoneIcon;
