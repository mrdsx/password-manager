import { useContext } from "react";
import { FolderContext } from "../../../../providers/FolderProvider";
import { UseDetailActions } from "./UseDetailActions";
import { CopyBtn } from "../../Buttons/CopyBtn";
import "./item-detail.modules.css";
import { DetailActions } from "./components/DetailActions";

export interface ItemDetailProps {
  defaultInputId?: string;
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

export function ItemDetail(props: ItemDetailProps): React.ReactElement {
  const { folders } = useContext(FolderContext);

  const {
    defaultInputId,
    fieldName = "",
    value,
    readOnly = false,
    type = "text",
    hasCopyBtn = false,
    hasCheckbox = false,
    checkboxChecked = false,
  } = props;

  const {
    inputVal,
    inputId,
    handleFieldChange,
    handleKeyDown,
    handleCheckboxChange,
  } = UseDetailActions({ ...props });

  return (
    <div className="detail">
      <div className="detail-field">
        {fieldName && (
          <label htmlFor={defaultInputId || inputId}>{fieldName}</label>
        )}
        {type === "select" ? (
          <select id="folders">
            {folders.map((folder, index) => {
              return <option key={index}>{folder}</option>;
            })}
          </select>
        ) : (
          <input
            type={type}
            id={defaultInputId || inputId}
            value={inputVal}
            readOnly={readOnly}
            onChange={handleFieldChange}
            // @ts-ignore
            onKeyDown={handleKeyDown}
          />
        )}
      </div>

      <DetailActions
        value={value}
        hasCopyBtn={hasCopyBtn}
        hasCheckbox={hasCheckbox}
        checkboxChecked={checkboxChecked}
        onCheckboxChangeFn={handleCheckboxChange}
      />
    </div>
  );
}

// TODO: extract .detail-field to new component
