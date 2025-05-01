import useGlobal from "../../store/index";
import { VaultItem } from "../VaultItem/VaultItem";
import viteIcon from "../../app/assets/vite.svg";
import "./item-list.modules.css";

export function ItemList() {
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
                  serviceName={vault[itemId].serviceName}
                  login={vault[itemId].login}
                  itemId={itemId}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="add-item-btn">
        <button
          onClick={() => {
            globalActions.setIsAddingItem(true);
          }}
        >+</button>
      </div>
    </div>
  );
}