import { UseDetailActions } from "./UseDetailActions";
import { CopyBtn } from "../../Buttons/CopyBtn";
import "./item-detail.modules.css";

export interface ItemDetailProps {
  fieldName?: string;
  value: string;
  readOnly?: boolean;
  type?: string;
  hasCopyBtn?: boolean;
  hasCheckbox?: boolean;
  checkboxChecked?: boolean;
  onFieldChangeFn?: Function;
  onCheckboxChangeFn?: Function;
}

export function ItemDetail(props: ItemDetailProps) {
  const {
    fieldName = "",
    value,
    readOnly = false,
    type = "text",
    hasCopyBtn = false,
    hasCheckbox = false,
    checkboxChecked = false,
    onFieldChangeFn,
    onCheckboxChangeFn,
  } = props;

  const necessaryProps = {
    fieldName,
    type,
    readOnly,
    value,
    onFieldChangeFn,
    onCheckboxChangeFn,
  };
  const {
    inputVal,
    inputId,
    handleFieldChange,
    handleKeyDown,
    handleCheckboxChange,
  } = UseDetailActions({ ...necessaryProps });

  return (
    <div className="detail">
      <div className="field">
        {fieldName && <label htmlFor={inputId}>{fieldName}</label>}
        <input
          type={type}
          id={inputId}
          value={inputVal}
          readOnly={readOnly}
          onChange={handleFieldChange}
          // @ts-ignore
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className="actions">
        {hasCopyBtn && <CopyBtn copyText={value} />}
        {hasCheckbox && (
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            defaultChecked={checkboxChecked}
          />
        )}
      </div>
    </div>
  );
}
