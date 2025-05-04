import useGlobal from "../../utils/store";
import { ItemDetail } from "../UI/ItemDetail";
import { ItemInfoProps } from "./DetailedItemInfo";

export function ViewItemInfo({ fields }: ItemInfoProps) {
  const [globalState, globalActions] = useGlobal();
  const { curItemId, vault } = globalState;

  return (
    <>
      {fields.map((field) => {
        const type = field === "password" && "password";
        const val = vault[curItemId][field.toLowerCase()];

        return (
          <ItemDetail
            labelContent={field}
            type={type || "text"}
            value={val || ""}
            readOnly={true}
          />
        );
      })}
    </>
  );
}
