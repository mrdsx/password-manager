import useGlobalStore from "../../../../store/globalStore";
import { ViewFields } from "./ViewFields";
import { EditFields } from "./EditFields";

interface FieldsProps {
  isViewingItem: boolean;
}

export function Fields(props: FieldsProps): React.ReactElement {
  // @ts-ignore
  const [globalState, globalActions] = useGlobalStore();
  const { vault, curItemId, isEditingItem } = globalState;

  const { isViewingItem } = props;

  const fields: string[] = Object.keys(vault[curItemId].details);

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
