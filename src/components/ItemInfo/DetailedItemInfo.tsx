import { useState, createContext } from "react";
import useGlobal, { State, Actions, LoginItem } from "../../store/store";
import { EditItemInfo } from "./EditItemInfo";
import { ViewItemInfo } from "./ViewItemInfo";
import { ItemActions } from "../Navigation/ItemActions/ItemActions";
import "./detailed-item-info.modules.css";

export interface ItemInfoProps {
  fields: string[];
}

export const EditingItemInfoContext = createContext(null as any);

export function DetailedItemInfo() {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { vault, curItemId, isEditingItem } = globalState;

  const [item, setItem] = useState<LoginItem>({
    ...vault[curItemId],
  });

  const fields: string[] = Object.keys(vault[curItemId].details);
  const isValidCurItemId: boolean = curItemId !== "0";

  return (
    <EditingItemInfoContext.Provider value={[item, setItem]}>
      <div className="item-details">
        <ul className="detail-fields">
          {isValidCurItemId && !isEditingItem ? (
            <ViewItemInfo fields={fields} />
          ) : (
            isEditingItem && <EditItemInfo fields={fields} />
          )}
        </ul>

        {(isValidCurItemId || isEditingItem) && <ItemActions />}
      </div>
    </EditingItemInfoContext.Provider>
  );
}
