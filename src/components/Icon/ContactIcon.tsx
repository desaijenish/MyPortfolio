import { FC } from "react";
import { ReactComponent as ContactIconSVG } from "../../assets/icon/contact.svg";
import { IconProps } from "./types";

const ContactIcon: FC<IconProps> = ({ size, color }) => {
  return <ContactIconSVG width={size} height={size} color={color} />;
};

export default ContactIcon;
