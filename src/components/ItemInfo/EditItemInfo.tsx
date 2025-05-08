import { ChangeEvent, useContext, useEffect } from "react";
import useGlobal, { State, Actions } from "../../store/store";
import { setObjectValuesEmpty } from "../../utils/objectMethods";
import { ItemDetail } from "../UI/ItemDetail";
import { ItemInfoProps, EditingItemInfoContext } from "./DetailedItemInfo";

export function EditItemInfo({ fields }: ItemInfoProps) {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { vault, curItemId, isAddingItem } = globalState;

  const { item, setItem } = useContext(EditingItemInfoContext);

  useEffect(() => {
    if (isAddingItem) {
      const nextItemDetails = setObjectValuesEmpty(item.details);
      setItem({ details: { ...nextItemDetails } });
    }
  }, [isAddingItem]);

  return (
    <>
      {fields.map((field, i) => {
        const type = field === "password" ? "password" : "text";
        const value = vault[curItemId].details[field as keyof object];

        return (
          <li key={i}>
            <ItemDetail
              fieldName={field}
              value={value}
              readOnly={false}
              type={type}
              hasCopyBtn={false}
              onChangeFn={(e: ChangeEvent<HTMLInputElement>) => {
                setItem({
                  details: {
                    ...item.details,
                    [field]: e.target.value,
                  },
                });
              }}
            />
          </li>
        );
      })}
    </>
  );
}
