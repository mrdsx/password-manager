import { ReactNode } from "react";
import "./body.modules.css";

export function Body({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
