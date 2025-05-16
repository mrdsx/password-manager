import { useContext, useEffect } from "react";
import {
  EditingItemContext,
  EditingItemContextType,
} from "../../../../providers/EditingItemProvider";
import { useItemActions } from "./useItemActions";

export function SaveBtn() {
  const { itemHasChanges, isNameValid, addOrEditItem } = useItemActions();

  const { item, saveBtnRef } = useContext(
    EditingItemContext
  ) as EditingItemContextType;

  // useEffect(() => {
  //   console.log(item);
  // }, [item]);

  function handleClick(): void {
    const actionAllowed = isNameValid() && itemHasChanges();

    if (actionAllowed) addOrEditItem();
  }

  return (
    <button id="save" onClick={handleClick} ref={saveBtnRef}>
      Save
    </button>
  );
}
