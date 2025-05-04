import { ChangeEventHandler } from "react";
import { CopyBtn } from "./CopyBtn";

interface ItemDetailProps {
  labelContent: string;
  value?: string;
  defaultValue?: string;
  readOnly?: boolean;
  type?: string;
  hasCopyBtn?: boolean;
  onChangeFn?: Function;
}

export function ItemDetail(props: ItemDetailProps) {
  const {
    labelContent,
    value,
    defaultValue,
    readOnly = false,
    type = "text",
    hasCopyBtn = true,
    onChangeFn,
  } = props;

  const id = labelContent;
  return (
    <div className="detail">
      <div className="field">
        <label htmlFor={id}>{labelContent}</label>
        <input
          type={type}
          id={id}
          // @ts-ignore
          value={value}
          defaultValue={defaultValue}
          readOnly={readOnly}
          onChange={onChangeFn as ChangeEventHandler}
        />
      </div>
      {hasCopyBtn && (
        <div className="detail-actions">
          <CopyBtn copyText={value as string} />
        </div>
      )}
    </div>
  );
}
