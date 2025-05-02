import useGlobal from "../../../store";
import { EditBtn } from "../../UI/EditBtn";
import { SaveBtn } from "../../UI/SaveBtn";
import { DeleteBtn } from "../../UI/DeleteBtn";
import { CancelBtn } from "../../UI/CancelBtn";

export function ItemActions() {
  // @ts-ignore
  const [ globalState, globalActions ] = useGlobal();

  return (
    <div className="item-actions">
      <div id="left-side" className="side">
        {!globalState.isEditingItem ?
        <EditBtn /> :
        <>
          <SaveBtn /> <CancelBtn />
        </>}
      </div>
      <div id="right-side" className="side">
        {globalState.isEditingItem && <DeleteBtn />}
      </div>
    </div>
  )
}