import useGlobal, { State, Actions } from "../../store/store";

export function DeleteBtn() {
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { vault, curItemId } = globalState;
  const { removeItem, moveItemToTrash, setIsEditingItem } = globalActions;

  function handleBtnClick(): void {
    setIsEditingItem(false);
    if (vault[curItemId].inTrash) {
      removeItem(curItemId);
    } else {
      moveItemToTrash(curItemId);
    }
  }

  return (
    <button id="delete" onClick={handleBtnClick}>
      Delete
    </button>
  );
}
