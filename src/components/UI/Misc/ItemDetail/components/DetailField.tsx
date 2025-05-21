import useGlobalStore, {
  Actions,
  State,
} from "../../../../../store/globalStore";
import { ItemDetailProps } from "../ItemDetail";
import { UseDetailActions } from "../UseDetailActions";
import { DetailFieldLabel } from "./DetailFieldComponents/DetailFieldLabel";
import { DetailFieldSelect } from "./DetailFieldComponents/DetailFieldSelect";

export function DetailField(props: ItemDetailProps): React.ReactElement {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobalStore();

  const {
    defaultInputId,
    fieldName = "",
    readOnly = false,
    type = "text",
  } = props;

  const {
    inputId,
    inputVal,
    handleFieldChange,
    handleKeyDown,
    handleSelectChange,
  } = UseDetailActions({ ...props });

  return (
    <div className="detail-field">
      <DetailFieldLabel
        fieldName={fieldName}
        inputId={inputId}
        defaultInputId={defaultInputId}
      />
      {type === "select" ? (
        <DetailFieldSelect onSelectChangeFn={handleSelectChange} />
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
  );
}
