export function ModalActions({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <div className="modal-actions">{children}</div>;
}
