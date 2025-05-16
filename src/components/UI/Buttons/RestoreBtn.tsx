import useGlobal, { State, Actions } from "../../../store/store";

export function RestoreBtn() {
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { vault, curItemId } = globalState;
  const { editItemById, setIsEditingItem } = globalActions;

  function restoreItem(): void {
    editItemById({ ...vault[curItemId], inTrash: false }, curItemId);
  }

  function handleClick(): void {
    setIsEditingItem(false);
    if (vault[curItemId].inTrash) restoreItem();
  }

  return (
    <button id="delete" onClick={handleClick}>
      Restore
    </button>
  );
}
