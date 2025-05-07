import useGlobal from "../../../store/store";
import { VaultItem } from "../../UI/VaultItem/VaultItem";
import { AddItemBtn } from "../../UI/AddItemBtn";
import "./scrollable-items.modules.css";

export function ScrollableItems() {
  // @ts-ignore
  const [globalState, globalActions] = useGlobal();
  const { vault } = globalState;

  return (
    <div className="items">
      <ul className="item-list">
        {Object.keys(vault).map((itemId) => {
          if (itemId !== "0")
            return (
              <li key={itemId}>
                <VaultItem vaultItem={vault[itemId]} itemId={itemId} />
              </li>
            );
        })}
      </ul>

      <div className="add-item-btn">
        <AddItemBtn />
      </div>
    </div>
  );
}
