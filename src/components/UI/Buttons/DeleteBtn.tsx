interface DeleteBtnProps {
  id: string;
  onClick(): void;
}

export function DeleteBtn(props: DeleteBtnProps): React.ReactElement {
  return (
    <button id={props.id} onClick={props.onClick}>
      Delete
    </button>
  );
}
