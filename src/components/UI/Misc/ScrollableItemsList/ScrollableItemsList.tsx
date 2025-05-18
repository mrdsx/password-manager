import useGlobalStore, { State, Actions } from "../../../../store/globalStore";
import { VaultItemBtn } from "../../Buttons/VaultItemBtn/VaultItemBtn";
import { UseListActions } from "./UseListActions";
import "./scrollable-items-list.modules.css";

export function ScrollableItemsList(): React.ReactElement {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobalStore();
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
