// @ts-ignore
import faviconFetch from "favicon-fetch";
import useGlobalStore, {
  State,
  Actions,
  LoginItemDetails,
} from "../../../../store/globalStore";
import { UseVaultItemActions } from "./UseVaultItemActions";
import "./vault-item-btn.modules.css";

interface VaultItemProps {
  itemDetails: LoginItemDetails;
  itemId: string;
}

const HIGHLIGHTED_ITEM_CLASSNAME: string = "item--highlighted";
const ICON_SIZE: number = 24;

export function VaultItemBtn(props: VaultItemProps): React.ReactElement {
  const [globalState, globalActions]: [State, Actions] = useGlobalStore();
  const { setCurItemId, setIsAddingItem } = globalActions;

  const { name, login, website } = props.itemDetails;

  const itemClassname: string =
    globalState.curItemId === props.itemId ? HIGHLIGHTED_ITEM_CLASSNAME : "";

  const { faviconURL } = UseVaultItemActions({ website });

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
