import useGlobal, { LoginItem } from "../../../store/store";
import { VaultItem } from "../../UI/VaultItem/VaultItem";
import { AddItemBtn } from "../../UI/AddItemBtn";
import "./scrollable-items.modules.css";
import { useContext } from "react";
import { TabContext, TabContextType } from "../../../app/App";

export function ScrollableItems() {
  // @ts-ignore
  const [globalState, globalActions] = useGlobal();
  const { vault } = globalState;

  const { curTab } = useContext(TabContext) as TabContextType;

  function isItemPassing(itemId: string): boolean | void {
    const { favorite, inTrash, type }: LoginItem = vault[itemId];

    switch (curTab) {
      case "Favorite":
        return favorite && !inTrash;
      case "Trash":
        return inTrash;
      case "Login":
        return type === "login" && !inTrash;
      case "Card":
        return type === "card" && !inTrash;
      case "Identity":
        return type === "id" && !inTrash;
      case "Secure note":
        return type === "secure note" && !inTrash;
      default:
        return !inTrash;
    }
  }

  return (
    <div className="items">
      <div className="item-list">
        {Object.keys(vault).map((itemId, index) => {
          const condition = isItemPassing(itemId);

          if (itemId !== "0" && condition) {
            return (
              <VaultItem
                vaultItem={vault[itemId]}
                itemId={itemId}
                key={index}
              />
            );
          }
        })}
      </div>

      <div className="add-item-btn">
        <AddItemBtn />
      </div>
    </div>
  );
}
