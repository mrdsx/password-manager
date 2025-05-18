import useGlobalStore, { State, Actions } from "../../../../store/globalStore";
import { UseFieldsActions } from "./UseFieldsActions";
import { capitalizeFirstLetter } from "../../../../utils/stringMethods";
import { ItemDetail } from "./../ItemDetail/ItemDetail";
import { ItemInfoProps } from "./../ItemInfo/ItemInfo";

export function EditFields({ fields }: ItemInfoProps): React.ReactElement {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobalStore();
  const { vault, curItemId } = globalState;

  const { item, handleFieldChange, handleCheckboxChange } = UseFieldsActions();

  return (
    <>
      {fields.map((field: string, index: number) => {
        const type = field === "password" ? "password" : "text";
        const value = vault[curItemId].details[field as keyof object];

        return (
          <ItemDetail
            fieldName={capitalizeFirstLetter(field)}
            value={value}
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
        value="Favorite"
        readOnly={true}
        hasCheckbox={true}
        checkboxChecked={item.favorite}
        onCheckboxChangeFn={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleCheckboxChange(e);
        }}
      />
    </>
  );
}
