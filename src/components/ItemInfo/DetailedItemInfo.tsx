import useGlobal from "../../store/index";
import { EditItemInfo } from "./EditItemInfo";
import { ItemActions } from "../Navigation/ItemActions/ItemActions";
import "./detailed-item-info.module.css";
import { ViewItemInfo } from "./ViewItemInfo";

export interface ItemInfoProps {
  fields: string[];
}

const LOGIN_FIELDS = ["Name", "Login", "Password", "Website"];

export function DetailedItemInfo() {
  // @ts-ignore
  const [ globalState, globalActions ] = useGlobal();
  const { isEditingItem, curItemId } = globalState;

  const validCurItemId = (curItemId !== "0");

  return (
    <>
      <div className="item-details">
        <div className="detail-fields">
          {(validCurItemId && !isEditingItem) ?
            (<ViewItemInfo fields={LOGIN_FIELDS} />) :
            (isEditingItem && <EditItemInfo fields={LOGIN_FIELDS} />)
          }
        </div>

        {(validCurItemId || isEditingItem) && <ItemActions />}
      </div>
    </>
  );
}