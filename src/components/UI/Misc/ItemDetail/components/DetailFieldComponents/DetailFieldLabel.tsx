interface LabelProps {
  fieldName: string;
  inputId: string;
  defaultInputId: string | undefined;
}

export function DetailFieldLabel(props: LabelProps): React.ReactElement {
  const { fieldName, defaultInputId, inputId } = props;

  return (
    <>
      {fieldName && (
        <label htmlFor={defaultInputId || inputId}>{fieldName}</label>
      )}
    </>
  );
}
