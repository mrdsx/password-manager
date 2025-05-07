import useGlobal from "../../../store/store";
import { EditBtn } from "../../UI/EditBtn";
import { SaveBtn } from "../../UI/SaveBtn";
import { DeleteBtn } from "../../UI/DeleteBtn";
import { CancelBtn } from "../../UI/CancelBtn";
import "./item-actions.modules.css";

export function ItemActions() {
  // @ts-ignore
  const [globalState, globalActions] = useGlobal();
  const { isEditingItem, isAddingItem } = globalState;

  return (
    <div className="item-actions">
      <div id="left-side" className="side">
        {!isEditingItem ? (
          <EditBtn />
        ) : (
          <>
            <SaveBtn /> <CancelBtn />
          </>
        )}
      </div>
      <div id="right-side" className="side">
        {isEditingItem && !isAddingItem && <DeleteBtn />}
      </div>
    </div>
  );
}
