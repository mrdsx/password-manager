// @ts-ignore
import faviconFetch from "favicon-fetch";
import { useEffect } from "react";
import useGlobal, {
  State,
  Actions,
  LoginItemDetails,
} from "../../../../store/store";
import "./vault-item-btn.modules.css";
import { UseVaultItemActions } from "./UseVaultItemActions";

interface VaultItemProps {
  itemDetails: LoginItemDetails;
  itemId: string;
}

const HIGHLIGHTED_ITEM_CLASSNAME: string = "item--highlighted";
const ICON_SIZE: number = 24;

export function VaultItemBtn(props: VaultItemProps) {
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { setCurItemId, setIsAddingItem } = globalActions;

  const { name, login, website } = props.itemDetails;

  const itemClassname: string =
    globalState.curItemId === props.itemId ? HIGHLIGHTED_ITEM_CLASSNAME : "";

  const { faviconURL, getFaviconURL } = UseVaultItemActions();

  useEffect(() => {
    getFaviconURL(website);
  }, []);

  useEffect(() => {
    getFaviconURL(website);
  }, [website]);

  function handleClick(): void {
    setCurItemId(props.itemId);
    setIsAddingItem(false);
  }

  return (
    <button className={`item ${itemClassname}`} onClick={handleClick}>
      <img src={faviconURL} alt="" width={ICON_SIZE} />
      <div className="item-info">
        <div className="service-name">{name}</div>
        {name && <span className="login">{login}</span>}
      </div>
    </button>
  );
}
