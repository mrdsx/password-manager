import { useContext, useEffect } from "react";
import { EditingItemContext } from "../../../../providers/EditingItemProvider";
import { useItemActions } from "./useItemActions";
import { SaveBtn } from "../SaveBtn";

export function SaveItemBtn(): React.ReactElement {
  const { itemHasChanges, isNameValid, addOrEditItem } = useItemActions();

  const { item, saveItemBtnRef } = useContext(EditingItemContext);

  // useEffect(() => {
  //   console.log(item);
  // }, [item]);

  function handleClick(): void {
    const actionAllowed = isNameValid() && itemHasChanges();

    if (actionAllowed) addOrEditItem();
  }

  return <SaveBtn onClick={handleClick} ref={saveItemBtnRef} />;
}
