import useGlobalStore, { State, Actions } from "../../../../store/globalStore";
import { ViewFields } from "./ViewFields";
import { EditFields } from "./EditFields";
import { decryptObjectIfEncrypted } from "../../../../utils/objectMethods";
import "./fields.modules.css";

interface FieldsProps {
  isViewingItem: boolean;
}

export function Fields(props: FieldsProps): React.ReactElement {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobalStore();
  const { vault, curItemId, isEditingItem } = globalState;

  const { isViewingItem } = props;

  const decryptedItemDetails = decryptObjectIfEncrypted(
    vault[curItemId].details
  );
  const fields = Object.keys(decryptedItemDetails);

  return (
    <div className="fields">
      {isViewingItem ? (
        <ViewFields fields={fields} />
      ) : (
        isEditingItem && <EditFields fields={fields} />
      )}
    </div>
  );
}
