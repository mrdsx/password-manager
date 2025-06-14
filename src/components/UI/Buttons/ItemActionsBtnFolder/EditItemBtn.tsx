import useGlobalStore, { State, Actions } from "../../../../store/globalStore";
import { useItemDetailsContext } from "../../Misc/ItemInfo/ItemInfoProvider";

export function EditItemBtn(): React.ReactElement {
  const [globalState, globalActions]: [State, Actions] = useGlobalStore();
  const { vault, curItemId } = globalState;
  const { setIsEditingItem } = globalActions;

  const { setItem } = useItemDetailsContext();

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
