import { useContext } from "react";
import useGlobal, { State, Actions } from "../../utils/store";
import { ItemDetail } from "../UI/ItemDetail";
import { ItemInfoProps, EditingItemInfoContext } from "./DetailedItemInfo";

export function EditItemInfo({ fields }: ItemInfoProps) {
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { vault, curItemId, isAddingItem } = globalState;

  const [item, setItemInfo] = useContext(EditingItemInfoContext);

  return (
    <>
      {fields.map((field) => {
        const type = field === "password" && "password";

        const key = field as keyof object;
        const val = !isAddingItem ? vault[curItemId][key] : "";

        return (
          <ItemDetail
            labelContent={field}
            hasCopyBtn={false}
            type={type || "text"}
            defaultValue={val}
            onChangeFn={(e: Event) => {
              setItemInfo({
                ...item,
                [key]: (e.target as HTMLInputElement).value,
              });
            }}
          />
        );
      })}
    </>
  );
}
