import useGlobalStore, { State, Actions } from "../../../store/globalStore";

export function RestoreItemBtn(): React.ReactElement {
  const [globalState, globalActions]: [State, Actions] = useGlobalStore();
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
