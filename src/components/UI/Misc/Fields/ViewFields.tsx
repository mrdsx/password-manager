import useGlobalStore, { Actions, State } from "../../../../store/globalStore";
import { decryptObjectIfEncrypted } from "../../../../utils/objectMethods";
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
        const decryptedItemDetails = decryptObjectIfEncrypted(
          vault[curItemId].details
        );

        const type = field === "password" ? "password" : "text";
        const value =
          decryptedItemDetails[field as keyof typeof decryptedItemDetails];
        const hasCopyBtn = field !== "name";

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
