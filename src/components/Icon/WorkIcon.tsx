import { FC } from "react";
import { ReactComponent as WorkIconSVG } from "../../assets/icon/work.svg";
import { IconProps } from "./types";

const WorkIcon: FC<IconProps> = ({ size, color }) => {
  return <WorkIconSVG width={size} height={size} color={color} />;
};

export default WorkIcon;
