interface ModalFieldProps {
  children: React.ReactNode;
  inputRef?: React.RefObject<HTMLInputElement | null>;
}

export function ModalField(props: ModalFieldProps): React.ReactElement {
  function handleClick(): void {
    props.inputRef?.current?.focus();
  }

  return (
    <div className="modal-field" onClick={handleClick}>
      {props.children}
    </div>
  );
}
