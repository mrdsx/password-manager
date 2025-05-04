import { useContext } from "react";
import useGlobal, { State, Actions } from "../../utils/store";
import { EditingItemInfoContext } from "../ItemInfo/DetailedItemInfo";
import { areObjectsEqual } from "../../utils/checkEquality";

export function SaveBtn() {
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { vault, curItemId, isAddingItem } = globalState;
  const { addItem, editItem, setIsAddingItem, setIsEditingItem } =
    globalActions;

  // @ts-ignore
  const [item, setItemInfo] = useContext(EditingItemInfoContext);

  function handleBtnClick(): void {
    const isNameValid = item !== undefined && item.name.trim() !== "";

    if (
      !isAddingItem &&
      !areObjectsEqual(item, vault[curItemId]) &&
      isNameValid
    ) {
      editItem(item, curItemId);
      setIsEditingItem(false);
    } else if (isAddingItem && isNameValid) {
      addItem(item);
      setIsAddingItem(false);
    }
  }

  return (
    <button id="save" onClick={handleBtnClick}>
      Save
    </button>
  );
}
