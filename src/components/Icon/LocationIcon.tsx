import { FC } from "react";
import { ReactComponent as LocationIconSVG } from "../../assets/icon/location.svg";
import { IconProps } from "./types";

const LocationIcon: FC<IconProps> = ({ size, color }) => {
  return <LocationIconSVG width={size} height={size} color={color} />;
};

export default LocationIcon;
