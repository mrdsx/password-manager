import { ChangeEvent, useEffect } from "react";
import useGlobalStore, {
  Actions,
  State,
  LoginItem,
} from "../../../../store/globalStore";
import { useItemDetailsContext } from "../ItemInfo/ItemInfoProvider";
import {
  decryptObjectIfEncrypted,
  setObjectValuesEmpty,
} from "../../../../utils/objectMethods";

interface FieldsActions {
  item: null | LoginItem;
  handleFieldChange(e: ChangeEvent<HTMLInputElement>, field: string): void;
  handleCheckboxChange(e: ChangeEvent<HTMLInputElement>): void;
  handleSelectChange(e: ChangeEvent<HTMLSelectElement>): void;
}

export function UseFieldsActions(): FieldsActions {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobalStore();
  const { vault, isAddingItem } = globalState;

  const { item, setItem } = useItemDetailsContext();

  useEffect(() => {
    if (isAddingItem) setEmptyItem();
  }, [isAddingItem]);

  function setEmptyItem(): void {
    if (!item?.details) return;

    const decryptedItemDetails = decryptObjectIfEncrypted(item.details);

    const nextItemDetails = setObjectValuesEmpty({
      ...decryptedItemDetails,
    });
    setItem({
      ...vault["0"],
      details: { ...nextItemDetails },
    });
  }

  function handleFieldChange(
    e: ChangeEvent<HTMLInputElement>,
    field: string
  ): void {
    const decryptedItemDetails = decryptObjectIfEncrypted(
      (item as LoginItem).details
    );
    setItem({
      ...(item as LoginItem),
      details: {
        ...decryptedItemDetails,
        [field]: e.target.value,
      },
    });
  }

  function handleCheckboxChange(e: ChangeEvent<HTMLInputElement>): void {
    setItem({
      ...(item as LoginItem),
      favorite: e.target.checked,
    });
  }

  function handleSelectChange(e: ChangeEvent<HTMLSelectElement>): void {
    setItem({
      ...(item as LoginItem),
      folder: e.target.value,
    });
  }

  return { item, handleFieldChange, handleCheckboxChange, handleSelectChange };
}
