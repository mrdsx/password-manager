import { useContext, ChangeEvent, useEffect } from "react";
import useGlobalStore, {
  Actions,
  State,
  LoginItem,
} from "../../../../store/globalStore";
import { EditingItemContext } from "../../../../providers/EditingItemProvider";
import { setObjectValuesEmpty } from "../../../../utils/objectMethods";

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

  const { item, setItem } = useContext(EditingItemContext);

  useEffect(() => {
    if (isAddingItem) setEmptyItem();
  }, [isAddingItem]);

  function setEmptyItem(): void {
    if (!item?.details) return;

    const nextItemDetails = setObjectValuesEmpty(item.details);
    setItem({
      ...vault["0"],
      details: { ...nextItemDetails },
    } as LoginItem);
  }

  function handleFieldChange(
    e: ChangeEvent<HTMLInputElement>,
    field: string
  ): void {
    setItem({
      ...item,
      details: {
        ...item?.details,
        [field]: e.target.value,
      },
    } as LoginItem);
  }

  function handleCheckboxChange(e: ChangeEvent<HTMLInputElement>): void {
    setItem({
      ...item,
      favorite: e.target.checked,
    } as LoginItem);
  }

  function handleSelectChange(e: ChangeEvent<HTMLSelectElement>): void {
    setItem({
      ...item,
      folder: e.target.value,
    } as LoginItem);
  }

  return { item, handleFieldChange, handleCheckboxChange, handleSelectChange };
}
