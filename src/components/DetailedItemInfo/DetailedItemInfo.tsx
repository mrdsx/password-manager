import useGlobal from "../../store/index";
import { ItemDetail } from "../UI/ItemDetail";
import { EditItemInfo } from "./EditItemInfo";
import { ItemActions } from "../Navigation/ItemActions/ItemActions";
import "./detailed-item-info.modules.css";

const LOGIN_FIELDS = ["Name", "Login", "Password", "Website"];

export function DetailedItemInfo() {
  // @ts-ignore
  const [ globalState, globalActions ] = useGlobal();

  const { isEditingItem, curItemId, vault } = globalState;
  const { name, login, password, website } = vault[curItemId];

  const validCurItemId = curItemId !== "0";

  return (
    <>
      <div className="item-details">
        <div className="detail-fields">
          {validCurItemId &&
          !isEditingItem ?
            <>
              <ItemDetail 
                labelContent="Name"
                value={name}
                readOnly={true}
                hasCopyBtn={false}
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
              <ItemDetail 
                labelContent="Website"
                value={website}
                readOnly={true}
              />
            </> :
            (isEditingItem && <EditItemInfo fields={LOGIN_FIELDS} />)
            }
        </div>

        {(validCurItemId || isEditingItem) && <ItemActions />}
      </div>
    </>
  );
}