// import { StyledFC } from "../../types/styledFC";

import { StyledFC } from "../../type/styledFC";


export interface IconProps {
  color?: string | undefined;
  size?: number | undefined;
}

export type IconComponent = StyledFC<IconProps>;
