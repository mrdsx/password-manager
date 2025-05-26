import { useContext } from "react";
import { EditingItemContext } from "../../../../../providers/EditingItemProvider";
import { useItemActions } from "./useItemActions";
import { SaveBtn } from "../../SaveBtn/SaveBtn";
import useGlobalStore, {
  Actions,
  State,
} from "../../../../../store/globalStore";

export function SaveItemBtn(): React.ReactElement {
  const [isAddingItem] = useGlobalStore(
    (state: State) => state.isAddingItem,
    (_actions: Actions) => undefined
  );

  const { itemHasChanges, isNameValid, addItemToVault, editItemInVault } =
    useItemActions();

  const { item, saveItemBtnRef } = useContext(EditingItemContext);

  function handleClick(): void {
    if (item === null) throw new Error("Item is null");

    if (!itemHasChanges() && !isNameValid()) return;

    if (isAddingItem) {
      addItemToVault();
    } else {
      editItemInVault();
    }
  }

  return <SaveBtn onClick={handleClick} ref={saveItemBtnRef} />;
}
