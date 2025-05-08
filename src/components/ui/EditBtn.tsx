import { useContext } from "react";
import useGlobal, { State, Actions } from "../../store/store";
import { EditingItemInfoContext } from "../ItemInfo/DetailedItemInfo";

export function EditBtn() {
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { vault, curItemId } = globalState;
  const { setIsEditingItem } = globalActions;

  const { setItem } = useContext(EditingItemInfoContext);

  function handleBtnClick(): void {
    setIsEditingItem(true);
    setItem({
      ...vault[curItemId],
    });
  }

  return (
    <button id="edit" onClick={handleBtnClick}>
      Edit
    </button>
  );
}
