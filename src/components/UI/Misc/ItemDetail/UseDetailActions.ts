import { ChangeEvent, useContext, useEffect, useState } from "react";
import { ItemDetailProps } from "./ItemDetail";
import { EditingItemContext } from "../../../../providers/EditingItemProvider";

interface DetailActions {
  inputVal: string;
  inputId: string;
  handleFieldChange(e: ChangeEvent<HTMLInputElement>): void;
  handleKeyDown(e: KeyboardEvent): void;
  handleCheckboxChange(e: ChangeEvent<HTMLInputElement>): void;
}

const PASS_MASK: string = "00000000";

export function UseDetailActions(props: ItemDetailProps): DetailActions {
  const {
    fieldName,
    type,
    readOnly,
    value,
    onFieldChangeFn,
    onCheckboxChangeFn,
  } = props;

  const val: string =
    type === "password" && readOnly && value.length > 0 ? PASS_MASK : value;
  const [inputVal, setInputVal] = useState<string>(val);

  const { saveItemBtnRef } = useContext(EditingItemContext);

  const inputId = fieldName?.toLowerCase() || "input";

  useEffect(() => {
    setInputVal(val);
  }, [val]);

  function handleFieldChange(e: ChangeEvent<HTMLInputElement>): void {
    if (onFieldChangeFn) onFieldChangeFn(e);
    setInputVal(e.target.value);
  }

  function handleKeyDown(e: KeyboardEvent): void {
    if (readOnly) return;

    if (e.key === "Enter") {
      saveItemBtnRef?.current?.click();
    }
  }

  function handleCheckboxChange(e: ChangeEvent<HTMLInputElement>) {
    if (onCheckboxChangeFn) onCheckboxChangeFn(e);
  }

  return {
    inputVal,
    inputId,
    handleFieldChange,
    handleKeyDown,
    handleCheckboxChange,
  };
}
