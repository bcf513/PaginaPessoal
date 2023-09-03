// src/assets/svg/svg.d.ts

declare module "*.svg" {
  import { FC, SVGProps, SVGSVGElement } from "react";
  export const ReactComponent: FC<SVGProps<SVGSVGElement>>;
}
