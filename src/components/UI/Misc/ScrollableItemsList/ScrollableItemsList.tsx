import useGlobal, { State, Actions } from "../../../../store/store";
import { VaultItemBtn } from "../../Buttons/VaultItemBtn/VaultItemBtn";
import "./scrollable-items-list.modules.css";
import { UseListActions } from "./UseListActions";

export function ScrollableItemsList() {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { vault } = globalState;

  const { getIsItemPassing } = UseListActions();

  return (
    <div className="item-list">
      {Object.keys(vault).map((itemId, index) => {
        const itemPassing = getIsItemPassing(itemId);

        if (itemId !== "0" && itemPassing) {
          return (
            <VaultItemBtn
              itemDetails={vault[itemId].details}
              itemId={itemId}
              key={index}
            />
          );
        }
      })}
    </div>
  );
}
