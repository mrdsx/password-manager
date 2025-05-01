import useGlobal from "../../store/index";
import { ItemDetail } from "../ui/ItemDetail";
import "./item-details.modules.css";

export function ItemDetails() {
  const [ globalState, globalActions ] = useGlobal();

  const { vault, curItemId } = globalState;
  const { serviceName, login, password, website } = vault[curItemId];

  const validItemId = curItemId !== 0;

  return (
    <div className="item-details">
      {validItemId &&
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
      </div>}
    </div>
  );
}