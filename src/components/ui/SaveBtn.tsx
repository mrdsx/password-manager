import { useContext } from "react";
import useGlobal, { State, Actions } from "../../store/store";
import { EditingItemInfoContext } from "../ItemInfo/DetailedItemInfo";
import { areObjectsEqual } from "../../utils/objectMethods";

export function SaveBtn() {
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { vault, curItemId, isAddingItem } = globalState;
  const { addItem, editItemById, setIsAddingItem, setIsEditingItem } =
    globalActions;

  const { item, saveBtnRef } = useContext(EditingItemInfoContext);

  function handleClick(): void {
    const isNameValid = item !== undefined && item.details.name.trim() !== "";

    if (!isNameValid) return;

    if (areObjectsEqual(item, vault[curItemId])) {
      setIsEditingItem(false);
    }

    if (isAddingItem) {
      addItem(item);
      setIsEditingItem(false);
    } else {
      editItemById(item, curItemId);
      setIsAddingItem(false);
    }
  }

  return (
    <button id="save" onClick={handleClick} ref={saveBtnRef}>
      Save
    </button>
  );
}
