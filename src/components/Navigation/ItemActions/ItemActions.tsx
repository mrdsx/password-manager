import useGlobal from "../../../store/store";
import { EditBtn } from "../../UI/EditBtn";
import { SaveBtn } from "../../UI/SaveBtn";
import { DeleteBtn } from "../../UI/DeleteBtn";
import { CancelBtn } from "../../UI/CancelBtn";
import "./item-actions.modules.css";

export function ItemActions() {
  const [globalState, globalActions] = useGlobal();

  return (
    <div className="item-actions">
      <div id="left-side" className="side">
        {!globalState.isEditingItem ? (
          <EditBtn />
        ) : (
          <>
            <SaveBtn /> <CancelBtn />
          </>
        )}
      </div>
      <div id="right-side" className="side">
        {globalState.isEditingItem && !globalState.isAddingItem && (
          <DeleteBtn />
        )}
      </div>
    </div>
  );
}
