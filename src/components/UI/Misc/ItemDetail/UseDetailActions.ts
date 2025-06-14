import { useEffect, useState } from "react";
import { ItemDetailProps } from "./ItemDetail";
import { useItemDetailsContext } from "../ItemInfo/ItemInfoProvider";

interface DetailActions {
  inputVal: string;
  inputId: string;
  handleFieldChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleKeyDown(e: KeyboardEvent): void;
  handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>): void;
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
    onSelectChangeFn,
  } = props;

  const val: string =
    type === "password" && readOnly && value.length > 0 ? PASS_MASK : value;
  const [inputVal, setInputVal] = useState<string>(val);

  const { saveItemBtnRef } = useItemDetailsContext();

  const inputId = fieldName?.toLowerCase() || "input";

  useEffect(() => {
    setInputVal(val);
  }, [val]);

  function handleFieldChange(e: React.ChangeEvent<HTMLInputElement>): void {
    if (onFieldChangeFn) onFieldChangeFn(e);
    setInputVal(e.target.value);
  }

  function handleKeyDown(e: KeyboardEvent): void {
    if (readOnly) return;

    if (e.key === "Enter") {
      saveItemBtnRef?.current?.click();
    }
  }

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>): void {
    if (onCheckboxChangeFn) onCheckboxChangeFn(e);
  }

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    if (onSelectChangeFn) onSelectChangeFn(e);
  }

  return {
    inputVal,
    inputId,
    handleFieldChange,
    handleKeyDown,
    handleCheckboxChange,
    handleSelectChange,
  };
}
