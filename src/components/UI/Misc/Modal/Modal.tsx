import "./modal.modules.css";

export function Modal({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <div className="modal">{children}</div>;
}
