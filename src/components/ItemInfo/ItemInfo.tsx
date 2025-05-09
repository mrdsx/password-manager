import {
  useState,
  createContext,
  useRef,
  Dispatch,
  SetStateAction,
  RefObject,
} from "react";
import useGlobal, { State, Actions, LoginItem } from "../../store/store";
import { EditItemInfo } from "./EditItemInfo";
import { ViewItemInfo } from "./ViewItemInfo";
import { ItemActions } from "../Navigation/ItemActions/ItemActions";
import "./item-info.modules.css";

export interface ItemInfoProps {
  fields: string[];
}

export type EditingItemContextType = {
  item: LoginItem | Partial<LoginItem>;
  setItem: Dispatch<SetStateAction<LoginItem | Partial<LoginItem>>>;
  saveBtnRef: RefObject<HTMLButtonElement | null>;
};

export const EditingItemContext = createContext<EditingItemContextType | null>(
  null
);

export function ItemInfo() {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { vault, curItemId, isEditingItem } = globalState;

  let [item, setItem] = useState<LoginItem | Partial<LoginItem>>({
    ...vault[curItemId],
  });

  const saveBtnRef = useRef<HTMLButtonElement>(null);

  const fields: string[] = Object.keys(vault[curItemId].details);
  const isValidCurItemId: boolean = curItemId !== "0";

  return (
    <EditingItemContext.Provider value={{ item, setItem, saveBtnRef }}>
      <div className="item-details">
        <div className="fields">
          {isValidCurItemId && !isEditingItem ? (
            <ViewItemInfo fields={fields} />
          ) : (
            isEditingItem && <EditItemInfo fields={fields} />
          )}
        </div>

        <div className="item-time-info">
          {isValidCurItemId && !isEditingItem && (
            <>
              <p className="update-time">Updated: time</p>
              <p className="creation-time">Created: time</p>
            </>
          )}
        </div>

        {(isValidCurItemId || isEditingItem) && <ItemActions />}
      </div>
    </EditingItemContext.Provider>
  );
}
