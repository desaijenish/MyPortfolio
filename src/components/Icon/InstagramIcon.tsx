import { FC } from "react";
import { ReactComponent as InstagrameIcon } from "../../assets/icon/Instagame.svg";
import { IconProps } from "./types";

const InstagrameICon: FC<IconProps> = ({ size, color }) => {
  return <InstagrameIcon width={size} height={size} color={color} />;
};

export default InstagrameICon;
