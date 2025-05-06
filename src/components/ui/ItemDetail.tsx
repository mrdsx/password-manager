import { ChangeEvent, useEffect, useState } from "react";
import { CopyBtn } from "./CopyBtn";

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
  }: ItemDetailProps = props;

  const val: string =
    type === "password" && readOnly && value.length > 0 ? PASS_MASK : value;

  const [inputVal, setInputVal] = useState<string>(val);

  useEffect(() => {
    setInputVal(val);
  }, [val]);

  return (
    <div className="detail">
      <div className="field">
        <label htmlFor={fieldName}>{fieldName}</label>
        <input
          type={type}
          id={fieldName}
          // @ts-ignore
          value={inputVal}
          readOnly={readOnly}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (onChangeFn) onChangeFn(e);
            setInputVal(e.target.value);
          }}
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
