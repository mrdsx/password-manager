import { ChangeEvent, useContext, useEffect, useState } from "react";
import { ItemDetailProps } from "./ItemDetail";
import {
  EditingItemContext,
  EditingItemContextType,
} from "../../../../providers/EditingItemProvider";

const PASS_MASK: string = "00000000";

export function UseDetailActions(props: ItemDetailProps) {
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

  const { saveBtnRef } = useContext(
    EditingItemContext
  ) as EditingItemContextType;

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
      saveBtnRef.current?.click();
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
