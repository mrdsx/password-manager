interface ToggleFoldersBtnProps {
  onClickFn(): void;
}

export function ToggleFoldersBtn(
  props: ToggleFoldersBtnProps
): React.ReactElement {
  return (
    <button className="dropdown-btn" onClick={props.onClickFn}>
      Folders
    </button>
  );
}
