import { useContext } from "react";
import useGlobalStore, { State, Actions } from "../../../../store/globalStore";
import { EditingItemContext } from "../../../../providers/EditingItemProvider";

export function EditItemBtn(): React.ReactElement {
  const [globalState, globalActions]: [State, Actions] = useGlobalStore();
  const { vault, curItemId } = globalState;
  const { setIsEditingItem } = globalActions;

  const { setItem } = useContext(EditingItemContext);

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
