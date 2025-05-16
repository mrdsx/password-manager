import useGlobal, { Actions, State } from "../../../../store/store";
import { capitalizeFirstLetter } from "../../../../utils/stringMethods";
import { ItemDetail } from "./../ItemDetail/ItemDetail";
import { ItemInfoProps } from "./../ItemInfo/ItemInfo";

export function ViewFields({ fields }: ItemInfoProps) {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { curItemId, vault } = globalState;

  return (
    <>
      {fields.map((field: string, index: number) => {
        const type = field === "password" ? "password" : "text";
        const value = vault[curItemId].details[field as keyof object];
        const hasCopyBtn = field !== "name" ? true : false;

        if (field !== "id") {
          return (
            <ItemDetail
              fieldName={capitalizeFirstLetter(field)}
              value={value}
              readOnly={true}
              type={type}
              hasCopyBtn={hasCopyBtn}
              key={index}
            />
          );
        }
      })}
    </>
  );
}
