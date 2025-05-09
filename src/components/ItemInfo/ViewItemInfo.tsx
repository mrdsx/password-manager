import useGlobal, { Actions, State } from "../../store/store";
import { ItemDetail } from "../UI/ItemDetail/ItemDetail";
import { ItemInfoProps } from "./ItemInfo";

export function ViewItemInfo({ fields }: ItemInfoProps) {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { curItemId, vault } = globalState;

  return (
    <>
      {fields.map((field, index) => {
        const type = field === "password" ? "password" : "text";
        const value = vault[curItemId].details[field as keyof object];

        if (field !== "id") {
          return (
            <ItemDetail
              fieldName={field}
              value={value}
              readOnly={true}
              type={type}
              key={index}
            />
          );
        }
      })}
    </>
  );
}
