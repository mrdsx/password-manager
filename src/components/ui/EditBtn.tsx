import { useContext } from "react";
import useGlobal, { State, Actions } from "../../store/store";
import {
  EditingItemContext,
  EditingItemContextType,
} from "../ItemInfo/ItemInfo";

export function EditBtn() {
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { vault, curItemId } = globalState;
  const { setIsEditingItem } = globalActions;

  const { setItem } = useContext(EditingItemContext) as EditingItemContextType;

  function handleClick(): void {
    setIsEditingItem(true);
    setItem({
      ...vault[curItemId],
    });
  }

  return (
    <button id="edit" onClick={handleClick}>
      Edit
    </button>
  );
}
