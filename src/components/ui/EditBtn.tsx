import { useContext } from "react";
import useGlobal, { State, Actions } from "../../utils/store";
import { EditingItemInfoContext } from "../ItemInfo/DetailedItemInfo";

export function EditBtn() {
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { vault, curItemId } = globalState;
  const { setIsEditingItem } = globalActions;

  // @ts-ignore
  const [item, setItemInfo] = useContext(EditingItemInfoContext);

  function handleBtnClick(): void {
    setIsEditingItem(true);
    setItemInfo({
      ...vault[curItemId],
    });
  }

  return (
    <button id="edit" onClick={handleBtnClick}>
      Edit
    </button>
  );
}
