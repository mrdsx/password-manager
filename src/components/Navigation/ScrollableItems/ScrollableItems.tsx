import useGlobal from "../../../store/index";
import { VaultItem } from "../../UI/VaultItem";
import { AddItemBtn } from "../../UI/AddItemBtn";
import viteIcon from "../../../app/assets/vite.svg";
import "./scrollable-items.modules.css";

export function ScrollableItems() {
  // @ts-ignore
  const [ globalState, globalActions ] = useGlobal();
  const { vault } = globalState;

  return (
    <div className="items">
      <div className="item-list">
        <ul>
          {Object.keys(vault).map((itemId) => {
            if (itemId !== "0") return (
              <li key={itemId}>
                <VaultItem
                  icon={viteIcon} 
                  name={vault[itemId].name}
                  login={vault[itemId].login}
                  itemId={itemId}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="add-item-btn">
        <AddItemBtn />
      </div>
    </div>
  );
}