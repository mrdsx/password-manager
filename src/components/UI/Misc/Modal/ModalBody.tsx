export function ModalBody({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <div className="modal-body">{children}</div>;
}
