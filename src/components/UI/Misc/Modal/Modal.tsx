import "./modal.modules.css";

interface ModalProps {
  children: React.ReactNode;
  extraClassName: string;
}

export function Modal(props: ModalProps): React.ReactElement {
  const { children, extraClassName } = props;

  return <div className={`modal ${extraClassName}`}>{children}</div>;
}
