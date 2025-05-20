import "./save-btn.modules.css";

interface SaveBtnProps {
  onClick(): void;
  ref?: React.RefObject<HTMLButtonElement | null>;
}

export function SaveBtn(props: SaveBtnProps): React.ReactElement {
  return (
    <button id="save" onClick={props.onClick} ref={props.ref}>
      Save
    </button>
  );
}
