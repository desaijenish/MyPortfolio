import { FC } from "react";

type StyledFC<P = Record<string, never>> = FC<
  P & { style?: React.CSSProperties | undefined }
>;
