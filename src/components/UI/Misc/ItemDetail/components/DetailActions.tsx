import { CopyBtn } from "../../../Buttons/CopyBtn";

interface DetailActionsProps {
  value: string;
  hasCopyBtn?: boolean;
  hasCheckbox?: boolean;
  checkboxChecked?: boolean;
  onCheckboxChangeFn?(e: React.ChangeEvent<HTMLInputElement>): void;
}

export function DetailActions(props: DetailActionsProps): React.ReactElement {
  const {
    value,
    hasCopyBtn,
    hasCheckbox,
    checkboxChecked,
    onCheckboxChangeFn,
  } = props;

  return (
    <div className="detail-actions">
      {hasCopyBtn && <CopyBtn copyText={value} />}
      {hasCheckbox && onCheckboxChangeFn && (
        <input
          type="checkbox"
          onChange={onCheckboxChangeFn}
          defaultChecked={checkboxChecked}
        />
      )}
    </div>
  );
}
