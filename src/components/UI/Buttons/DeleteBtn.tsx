interface DeleteBtnProps {
  onClick(): void;
}

export function DeleteBtn(props: DeleteBtnProps): React.ReactElement {
  return (
    <button id="delete-btn" onClick={props.onClick}>
      Delete
    </button>
  );
}
