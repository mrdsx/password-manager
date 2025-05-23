import "./main.modules.css";

export function Main({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <main>{children}</main>;
}
