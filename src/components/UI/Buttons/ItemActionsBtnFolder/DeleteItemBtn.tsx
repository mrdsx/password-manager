import useGlobalStore, { State, Actions } from "../../../../store/globalStore";
import { DeleteBtn } from "../DeleteBtn";

export function DeleteItemBtn(): React.ReactElement {
  const [globalState, globalActions]: [State, Actions] = useGlobalStore();
  const { vault, curItemId } = globalState;
  const { setCurItemId, editItemById, removeItem, setIsEditingItem } =
    globalActions;

  function moveItemToTrash(): void {
    editItemById({ ...vault[curItemId], inTrash: true }, curItemId);
  }

  function handleClick(): void {
    setIsEditingItem(false);
    setCurItemId("0");

    if (vault[curItemId].inTrash) {
      removeItem(curItemId);
    } else {
      moveItemToTrash();
    }
  }

  return <DeleteBtn id="delete-item" onClick={handleClick} />;
}
