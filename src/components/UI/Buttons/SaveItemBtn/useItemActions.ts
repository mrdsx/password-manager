import { useContext } from "react";
import useGlobalStore, {
  State,
  Actions,
  LoginItem,
} from "../../../../store/globalStore";
import { areObjectsEqual } from "../../../../utils/objectMethods";
import { EditingItemContext } from "../../../../providers/EditingItemProvider";

interface ItemActions {
  itemHasChanges(): boolean | undefined;
  isNameValid(): boolean;
  addOrEditItem(): void;
}

export function useItemActions(): ItemActions {
  const [globalState, globalActions]: [State, Actions] = useGlobalStore();
  const { vault, curItemId, isAddingItem } = globalState;
  const { addItem, editItemById, setIsAddingItem, setIsEditingItem } =
    globalActions;

  const { item, setItem } = useContext(EditingItemContext);

  function itemHasChanges(): boolean | undefined {
    if (item === null) throw new Error("Item is null");

    if (!areObjectsEqual(item, vault[curItemId])) {
      return true;
    }
    setIsEditingItem(false);
    return false;
  }

  function isNameValid(): boolean {
    return item !== undefined && item?.details?.name.trim() !== "";
  }

  function addOrEditItem(): void {
    if (item === null) throw new Error("Item is null");

    if (isAddingItem) {
      setItem({ ...item, createdAt: new Date(), updatedAt: new Date() });
      addItem(item as LoginItem);
      setIsEditingItem(false);
    } else {
      setItem({ ...item, updatedAt: new Date() });
      editItemById(item as LoginItem, curItemId);
      setIsAddingItem(false);
    }
  }

  return { itemHasChanges, isNameValid, addOrEditItem };
}
