import useGlobal from "../../store/index";
import { Item } from "../Item/Item";
import viteIcon from "../../app/assets/vite.svg";
import "./item-list.modules.css";

export function ItemList() {
  const [ globalState, globalActions ] = useGlobal();
  const { vault } = globalState;

  return (
    <div className="items">
      <div className="item-list">
        <ul>
          {Object.keys(vault).map((key) => {
            return (
              <li key={key}>
                <Item
                  icon={viteIcon} 
                  serviceName={vault[key].serviceName}
                  login={vault[key].login}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="add-item-btn">
        <button 
          onClick={() => {
            globalActions.addItemToVault({
              serviceName: "GitLab",
              login: "rx",
              password: "13456789",
              website: "https://youtube.com"
            })
          }}
        >+</button>
      </div>
    </div>
  );
}