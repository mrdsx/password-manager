import { ChangeEvent, useContext, useEffect } from "react";
import useGlobal, { State, Actions } from "../../store/store";
import { setObjectValuesEmpty } from "../../utils/objectMethods";
import { ItemDetail } from "../UI/ItemDetail";
import { ItemInfoProps, EditingItemInfoContext } from "./DetailedItemInfo";

export function EditItemInfo({ fields }: ItemInfoProps) {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { vault, curItemId, isAddingItem } = globalState;

  const [item, setItemInfo] = useContext(EditingItemInfoContext);

  useEffect(() => {
    if (isAddingItem) {
      const nextItem = setObjectValuesEmpty(item);
      setItemInfo(nextItem);
    }
  }, [isAddingItem]);

  return (
    <>
      {fields.map((field, i) => {
        const type = field === "password" ? "password" : "text";
        const value = vault[curItemId][field as keyof object];

        return (
          <li key={i}>
            <ItemDetail
              fieldName={field}
              value={value}
              readOnly={false}
              type={type}
              hasCopyBtn={false}
              onChangeFn={(e: ChangeEvent<HTMLInputElement>) => {
                setItemInfo({
                  ...item,
                  [field]: e.target.value,
                });
              }}
            />
          </li>
        );
      })}
    </>
  );
}
