import useGlobalStore, {
  State,
  Actions,
  LoginItem,
  LoginItemDetails,
} from "../../../../../store/globalStore";
import { useItemDetailsContext } from "../../../Misc/ItemInfo/ItemInfoProvider";
import {
  areObjectsEqual,
  decryptObjectIfEncrypted,
  encryptObjectIfDecrypted,
} from "../../../../../utils/objectMethods";

interface ItemActions {
  itemHasChanges(): boolean;
  isNameValid(): boolean;
  addItemToVault(): void;
  editItemInVault(): void;
}

export function useItemActions(): ItemActions {
  const [globalState, globalActions]: [State, Actions] = useGlobalStore();
  const { vault, curItemId } = globalState;
  const { addItem, editItemById, setIsAddingItem, setIsEditingItem } =
    globalActions;

  const { item } = useItemDetailsContext();

  function getInitialItemFromVault(itemId: string): LoginItem {
    const initialDecryptedItemDetails = decryptObjectIfEncrypted(
      vault[itemId].details as LoginItemDetails | string
    );
    return {
      ...vault[itemId],
      details: { ...initialDecryptedItemDetails },
    };
  }

  function getCurrentItemFromContext(): LoginItem {
    if (item === null) throw new Error("Item is null");

    const currentDecryptedItemDetails = decryptObjectIfEncrypted(item.details);
    return {
      ...item,
      details: { ...currentDecryptedItemDetails },
    };
  }

  function itemHasChanges(): boolean {
    const initialItem = getInitialItemFromVault(curItemId);
    const currentItem = getCurrentItemFromContext();

    setIsEditingItem(false);
    return !areObjectsEqual(initialItem, currentItem);
  }

  function isNameValid(): boolean {
    if (item === null) throw new Error("Item is null");

    const itemDetails = decryptObjectIfEncrypted(item.details);
    return (
      typeof itemDetails === "object" &&
      itemDetails !== null &&
      itemDetails.name.trim() !== ""
    );
  }

  function addItemToVault(): void {
    if (item === null) throw new Error("Item is null");

    addItem({
      ...item,
      details: encryptObjectIfDecrypted(item.details),
    });
    setIsEditingItem(false);
  }

  function editItemInVault(): void {
    if (item === null) throw new Error("Item is null");

    editItemById(
      {
        ...item,
        details: encryptObjectIfDecrypted(item.details),
      },
      curItemId
    );
    setIsAddingItem(false);
  }

  return { itemHasChanges, isNameValid, addItemToVault, editItemInVault };
}
