import useGlobalStore, { Actions, State } from "../../../../store/globalStore";
import { capitalizeFirstLetter } from "../../../../utils/stringMethods";
import { ItemDetail } from "./../ItemDetail/ItemDetail";
import { ItemInfoProps } from "./../ItemInfo/ItemInfo";

export function ViewFields({ fields }: ItemInfoProps): React.ReactElement {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobalStore();
  const { curItemId, vault } = globalState;

  return (
    <>
      {fields.map((field: string, index: number) => {
        const type: string = field === "password" ? "password" : "text";
        const value: string = vault[curItemId].details[field as keyof object];
        const hasCopyBtn: boolean = field !== "name";

        if (field !== "id" && value) {
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
