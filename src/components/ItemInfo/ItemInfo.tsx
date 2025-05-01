import useGlobal from "../../store/index";
import { ItemDetail } from "../ui/ItemDetail";
import "./item-info.modules.css";

export function ItemInfo() {
  // @ts-ignore
  const [ globalState, globalActions ] = useGlobal();

  const { isAddingItem, curItemId, vault } = globalState;
  const { serviceName, login, password, website } = vault[curItemId];

  const validItemId = curItemId !== 0;

  return (
    <div className="item-details">
      {validItemId &&
      !isAddingItem &&
        <div className="detail-fields">
          <ItemDetail 
            labelContent="Name"
            value={serviceName}
            readOnly={true}
          />
          <ItemDetail 
            labelContent="Login"
            value={login}
            readOnly={true}
          />
          <ItemDetail 
            labelContent="Password"
            value={password}
            readOnly={true}
            type="password"
          />
          <br />
          <ItemDetail 
            labelContent="Website"
            value={website}
            readOnly={true}
          />
        </div>
      }
    </div>
  );
}