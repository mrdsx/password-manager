import useGlobalStore, { State, Actions } from "../../../../store/globalStore";
import { UseFieldsActions } from "./UseFieldsActions";
import { capitalizeFirstLetter } from "../../../../utils/stringMethods";
import { ItemDetail } from "./../ItemDetail/ItemDetail";
import { ItemInfoProps } from "./../ItemInfo/ItemInfo";

export function EditFields({ fields }: ItemInfoProps): React.ReactElement {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobalStore();
  const { vault, curItemId } = globalState;

  const { item, handleFieldChange, handleCheckboxChange, handleSelectChange } =
    UseFieldsActions();

  return (
    <>
      {fields.map((field: string, index: number) => {
        const type = field === "password" ? "password" : "text";
        const title = vault[curItemId].details[field as keyof object];

        return (
          <ItemDetail
            fieldName={capitalizeFirstLetter(field)}
            value={title}
            type={type}
            onFieldChangeFn={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleFieldChange(e, field);
            }}
            key={index}
          />
        );
      })}
      <br />
      <ItemDetail
        defaultInputId="favorite-checkbox"
        value="Favorite"
        readOnly={true}
        hasCheckbox={true}
        checkboxChecked={item?.favorite}
        onCheckboxChangeFn={handleCheckboxChange}
      />
      <br />
      <ItemDetail
        defaultInputId="folder-select"
        value="Folder"
        type="select"
        onSelectChangeFn={handleSelectChange}
      />
    </>
  );
}
