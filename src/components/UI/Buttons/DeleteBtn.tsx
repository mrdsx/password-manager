import useGlobal, { State, Actions } from "../../../store/store";

export function DeleteBtn() {
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { vault, curItemId } = globalState;
  const { setCurItemId, editItemById, removeItem, setIsEditingItem } =
    globalActions;

  function moveItemToTrash(): void {
    editItemById({ ...vault[curItemId], inTrash: true }, curItemId);
  }

  function handleClick(): void {
    setIsEditingItem(false);
    setCurItemId("0");

    if (vault[curItemId].inTrash) {
      removeItem(curItemId);
    } else {
      moveItemToTrash();
    }
  }

  return (
    <button id="delete" onClick={handleClick}>
      Delete
    </button>
  );
}
