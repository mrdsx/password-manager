import useGlobalStore, { State, Actions } from "../../../../store/globalStore";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";
import "./item-actions.modules.css";

export function ItemActions(): React.ReactElement {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobalStore();
  const { isEditingItem, isAddingItem } = globalState;

  const editingExistingItem = isEditingItem && !isAddingItem;

  return (
    <div className="item-actions">
      <LeftSide isEditingItem={isEditingItem} />
      <RightSide editingExistingItem={editingExistingItem} />
    </div>
  );
}
