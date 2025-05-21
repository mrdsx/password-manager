import { CopyBtn } from "../../../Buttons/CopyBtn";
import { ItemDetailProps } from "../ItemDetail";
import { UseDetailActions } from "../UseDetailActions";

export function DetailActions(props: ItemDetailProps): React.ReactElement {
  const {
    value,
    hasCopyBtn,
    hasCheckbox,
    checkboxChecked,
    onCheckboxChangeFn,
  } = props;

  const { handleCheckboxChange } = UseDetailActions({ ...props });

  return (
    <div className="detail-actions">
      {hasCopyBtn && <CopyBtn copyText={value} />}
      {hasCheckbox && onCheckboxChangeFn && (
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          defaultChecked={checkboxChecked}
        />
      )}
    </div>
  );
}
