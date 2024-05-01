import { FC } from "react";
import { ReactComponent as EmailIconSVG } from "../../assets/icon/email.svg";
import { IconProps } from "./types";

const EmailIcon: FC<IconProps> = ({ size, color }) => {
  return <EmailIconSVG width={size} height={size} color={color} />;
};

export default EmailIcon;
