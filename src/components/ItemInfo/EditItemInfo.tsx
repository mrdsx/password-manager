import { ChangeEvent, useContext, useEffect } from "react";
import useGlobal, { State, Actions, LoginItem } from "../../store/store";
import { setObjectValuesEmpty } from "../../utils/objectMethods";
import { ItemDetail } from "../UI/ItemDetail/ItemDetail";
import {
  ItemInfoProps,
  EditingItemContext,
  EditingItemContextType,
} from "./ItemInfo";

export function EditItemInfo({ fields }: ItemInfoProps) {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { vault, curItemId, isAddingItem } = globalState;

  const { item, setItem } = useContext(
    EditingItemContext
  ) as EditingItemContextType;

  useEffect(() => {
    if (isAddingItem) {
      const nextItemDetails = setObjectValuesEmpty(
        item.details as Partial<LoginItem>
      );
      setItem({ details: { ...nextItemDetails } } as Partial<LoginItem>);
    }
  }, [isAddingItem]);

  return (
    <>
      {fields.map((field, index) => {
        const type = field === "password" ? "password" : "text";
        const value = vault[curItemId].details[field as keyof object];

        return (
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
              } as Partial<LoginItem>);
            }}
            key={index}
          />
        );
      })}
    </>
  );
}
