import { useContext } from "react";
import useGlobal, { State, Actions, LoginItem } from "../../store/store";
import {
  EditingItemContext,
  EditingItemContextType,
} from "../ItemInfo/ItemInfo";
import { areObjectsEqual } from "../../utils/objectMethods";

export function SaveBtn() {
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { vault, curItemId, isAddingItem } = globalState;
  const { addItem, editItemById, setIsAddingItem, setIsEditingItem } =
    globalActions;

  const { item, saveBtnRef } = useContext(
    EditingItemContext
  ) as EditingItemContextType;

  function handleClick(): void {
    const isNameValid = item !== undefined && item.details?.name.trim() !== "";

    if (!isNameValid) return;

    if (areObjectsEqual(item, vault[curItemId])) {
      setIsEditingItem(false);
      return;
    }

    if (isAddingItem) {
      addItem(item as LoginItem);
      setIsEditingItem(false);
    } else {
      editItemById(item as LoginItem, curItemId);
      setIsAddingItem(false);
    }
  }

  return (
    <button id="save" onClick={handleClick} ref={saveBtnRef}>
      Save
    </button>
  );
}
