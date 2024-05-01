import { FC } from "react";
import { ReactComponent as GithubIconSVG } from "../../assets/icon/github.svg";
import { IconProps } from "./types";

const GithubIcon: FC<IconProps> = ({ size, color }) => {
  return <GithubIconSVG width={size} height={size} color={color} />;
};

export default GithubIcon;
