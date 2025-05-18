interface CancelBtnProps {
  onClick(): void;
}

export function CancelBtn(props: CancelBtnProps): React.ReactElement {
  function handleClick(): void {
    props.onClick();
  }

  return (
    <button id="cancel" onClick={handleClick}>
      Cancel
    </button>
  );
}
