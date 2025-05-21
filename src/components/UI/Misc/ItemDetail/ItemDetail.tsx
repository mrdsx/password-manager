import { ChangeEventHandler } from "react";
import { DetailActions } from "./components/DetailActions";
import { DetailField } from "./components/DetailField";
import "./item-detail.modules.css";

export interface ItemDetailProps {
  defaultInputId?: string;
  fieldName?: string;
  value: string;
  readOnly?: boolean;
  type?: string;
  hasCopyBtn?: boolean;
  hasCheckbox?: boolean;
  checkboxChecked?: boolean;
  onFieldChangeFn?: ChangeEventHandler<HTMLInputElement>;
  onCheckboxChangeFn?: ChangeEventHandler<HTMLInputElement>;
  onSelectChangeFn?: ChangeEventHandler<HTMLSelectElement>;
}

export function ItemDetail(props: ItemDetailProps): React.ReactElement {
  const {
    defaultInputId,
    fieldName = "",
    value,
    readOnly = false,
    type = "text",
    hasCopyBtn = false,
    hasCheckbox = false,
    checkboxChecked = false,
    onFieldChangeFn,
    onCheckboxChangeFn,
    onSelectChangeFn,
  } = props;

  return (
    <div className="detail">
      <DetailField
        value={value}
        defaultInputId={defaultInputId}
        fieldName={fieldName}
        readOnly={readOnly}
        type={type}
        onFieldChangeFn={onFieldChangeFn}
        onSelectChangeFn={onSelectChangeFn}
      />

      <DetailActions
        value={value}
        hasCopyBtn={hasCopyBtn}
        hasCheckbox={hasCheckbox}
        checkboxChecked={checkboxChecked}
        onCheckboxChangeFn={onCheckboxChangeFn}
      />
    </div>
  );
}
