import { ChangeEvent } from "react";
import useGlobal, { State, Actions } from "../../../../store/store";
import { capitalizeFirstLetter } from "../../../../utils/stringMethods";
import { ItemDetail } from "./../ItemDetail/ItemDetail";
import { ItemInfoProps } from "./../ItemInfo/ItemInfo";
import { UseFieldsActions } from "./UseFieldsActions";

export function EditFields({ fields }: ItemInfoProps) {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobal();
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
            onFieldChangeFn={(e: ChangeEvent<HTMLInputElement>) => {
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
        onCheckboxChangeFn={(e: ChangeEvent<HTMLInputElement>) => {
          handleCheckboxChange(e);
        }}
      />
    </>
  );
}
