import useGlobalStore, { State, Actions } from "../../../../store/globalStore";
import { EditingItemProvider } from "../../../../providers/EditingItemProvider";
import { ItemActions } from "../ItemActions/ItemActions";
import { Fields } from "../Fields/Fields";
import { TimeInfo } from "../TimeInfo";
import "./item-info.modules.css";

export interface ItemInfoProps {
  fields: string[];
}

export function ItemInfo(): React.ReactElement {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobalStore();
  const { curItemId, isEditingItem } = globalState;

  const isValidCurItemId: boolean = curItemId !== "0";

  const isViewingItem = isValidCurItemId && !isEditingItem;

  return (
    <EditingItemProvider>
      <div className="item-details">
        <Fields isViewingItem={isViewingItem} />
        <TimeInfo isViewingItem={isViewingItem} />

        {(isValidCurItemId || isEditingItem) && <ItemActions />}
      </div>
    </EditingItemProvider>
  );
}
