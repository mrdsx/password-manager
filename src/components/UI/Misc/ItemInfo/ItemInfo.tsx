import useGlobalStore, { State, Actions } from "../../../../store/globalStore";
import { EditingItemDetailsProvider } from "./ItemInfoProvider";
import { ItemActions } from "../ItemActions/ItemActions";
import { Fields } from "../Fields/Fields";
import "./item-info.modules.css";

export interface ItemInfoProps {
  fields: string[];
}

export function ItemInfo(): React.ReactElement {
  const [globalState, _globalActions]: [State, Actions] = useGlobalStore();
  const { curItemId, isEditingItem } = globalState;

  const isValidCurItemId = curItemId !== "0";

  const isViewingItem = isValidCurItemId && !isEditingItem;

  return (
    <EditingItemDetailsProvider>
      <div className="item-details">
        <Fields isViewingItem={isViewingItem} />

        {(isValidCurItemId || isEditingItem) && <ItemActions />}
      </div>
    </EditingItemDetailsProvider>
  );
}
