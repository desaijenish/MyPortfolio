import { FC } from "react";
import { ReactComponent as DownloadIconSVG } from "../../assets/icon/DownloadFile.svg";
import { IconProps } from "./types";

const DownloadIcon: FC<IconProps> = ({ size, color }) => {
  return <DownloadIconSVG width={size} height={size} color={color} />;
};

export default DownloadIcon;
