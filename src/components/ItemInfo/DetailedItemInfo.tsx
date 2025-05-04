import { useState, createContext } from "react";
import useGlobal, { State, Actions, LoginItem } from "../../utils/store";
import { EditItemInfo } from "./EditItemInfo";
import { ViewItemInfo } from "./ViewItemInfo";
import { ItemActions } from "../Navigation/ItemActions/ItemActions";
import "./detailed-item-info.modules.css";

export interface ItemInfoProps {
  fields: string[];
}

export const EditingItemInfoContext = createContext(null as any);

export function DetailedItemInfo() {
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { vault, curItemId, isEditingItem } = globalState;

  const [item, setItemInfo] = useState<LoginItem>({
    ...vault[curItemId],
  });

  const fields = Object.keys(vault[curItemId]);
  const validCurItemId = curItemId !== "0";

  return (
    <EditingItemInfoContext.Provider value={[item, setItemInfo]}>
      <div className="item-details">
        <div className="detail-fields">
          {validCurItemId && !isEditingItem ? (
            <ViewItemInfo fields={fields} />
          ) : (
            isEditingItem && <EditItemInfo fields={fields} />
          )}
        </div>

        {(validCurItemId || isEditingItem) && <ItemActions />}
      </div>
    </EditingItemInfoContext.Provider>
  );
}
