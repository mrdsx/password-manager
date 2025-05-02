import useGlobal from "../../store";
import { ItemDetail } from "../UI/ItemDetail";
import { ItemInfoProps } from "./DetailedItemInfo";

export function ViewItemInfo({ fields }: ItemInfoProps) {
  // @ts-ignore
  const [ globalState, globalActions ] = useGlobal();
  const { curItemId, vault } = globalState;

  return (
    <>
      {
        fields.map(field => {
          const type = (field === "Password") ? "password" : "text";
          const val = vault[curItemId][field.toLowerCase()];

          return (
            <ItemDetail
              labelContent={field}
              type={type}
              value={val || ""}
              readOnly={true}
            />
          );
        })
      }
    </>
  );
}