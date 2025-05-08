import { ChangeEvent, useState, useEffect, useContext } from "react";
import { CopyBtn } from "./CopyBtn";
import { EditingItemInfoContext } from "../ItemInfo/DetailedItemInfo";

const PASS_MASK: string = "00000000";

interface ItemDetailProps {
  fieldName: string;
  value: string;
  readOnly: boolean;
  type?: string;
  hasCopyBtn?: boolean;
  onChangeFn?: Function;
}

export function ItemDetail(props: ItemDetailProps) {
  const {
    fieldName,
    value,
    readOnly,
    type = "text",
    hasCopyBtn = true,
    onChangeFn,
  } = props;

  const val: string =
    type === "password" && readOnly && value.length > 0 ? PASS_MASK : value;
  const [inputVal, setInputVal] = useState<string>(val);

  const { saveBtnRef } = useContext(EditingItemInfoContext);

  useEffect(() => {
    setInputVal(val);
  }, [val]);

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    if (onChangeFn) onChangeFn(e);
    setInputVal(e.target.value);
  }

  function handleKeyDown(e: KeyboardEvent): void {
    if (!readOnly && e.key === "Enter") {
      saveBtnRef.current.click();
    }
  }

  return (
    <div className="detail">
      <div className="field">
        <label htmlFor={fieldName}>{fieldName}</label>
        <input
          type={type}
          id={fieldName}
          value={inputVal}
          readOnly={readOnly}
          onChange={handleChange}
          // @ts-ignore
          onKeyDown={handleKeyDown}
        />
      </div>

      {hasCopyBtn && (
        <div className="detail-actions">
          <CopyBtn copyText={value} />
        </div>
      )}
    </div>
  );
}
