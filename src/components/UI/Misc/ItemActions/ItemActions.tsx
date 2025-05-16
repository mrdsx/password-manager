import useGlobal, { State, Actions } from "../../../../store/store";
import "./item-actions.modules.css";
import { LeftSide } from "./Sides/LeftSide";
import { RightSide } from "./Sides/RightSide";

export function ItemActions() {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { isEditingItem, isAddingItem } = globalState;

  const editingExistingItem = isEditingItem && !isAddingItem;

  return (
    <div className="item-actions">
      <LeftSide isEditingItem={isEditingItem} />
      <RightSide editingExistingItem={editingExistingItem} />
    </div>
  );
}
