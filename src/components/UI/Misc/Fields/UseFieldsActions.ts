import { useContext, ChangeEvent, useEffect } from "react";
import useGlobal, { Actions, State, LoginItem } from "../../../../store/store";
import {
  EditingItemContext,
  EditingItemContextType,
} from "../../../../providers/EditingItemProvider";
import { setObjectValuesEmpty } from "../../../../utils/objectMethods";

export function UseFieldsActions() {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { vault, isAddingItem } = globalState;

  const { item, setItem } = useContext(
    EditingItemContext
  ) as EditingItemContextType;

  useEffect(() => {
    if (isAddingItem) setEmptyItem();
  }, [isAddingItem]);

  function setEmptyItem(): void {
    if (!item.details) return;

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
        ...item.details,
        [field]: e.target.value,
      },
    } as LoginItem);
  }

  function handleCheckboxChange(e: ChangeEvent<HTMLInputElement>): void {
    setItem({
      ...item,
      favorite: e.target.checked,
    });
  }

  return { item, handleFieldChange, handleCheckboxChange };
}
