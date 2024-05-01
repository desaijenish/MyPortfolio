import { FC } from "react";
import { ReactComponent as ResumeIconSVG } from "../../assets/icon/resume.svg";
import { IconProps } from "./types";

const ResumeIcon: FC<IconProps> = ({ size, color }) => {
  return <ResumeIconSVG width={size} height={size} color={color} />;
};

export default ResumeIcon;
