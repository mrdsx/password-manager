// @ts-ignore
import faviconFetch from "favicon-fetch";
import { useEffect, useState } from "react";
import useGlobal, { State, Actions, LoginItem } from "../../../store/store";
import emptyIcon from "../../../app/assets/web.svg";
import "./vault-item.modules.css";

interface VaultItemProps {
  vaultItem: LoginItem;
  itemId: string;
}

export function VaultItem(props: VaultItemProps) {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { setCurItemId, setIsAddingItem } = globalActions;

  const { vaultItem, itemId } = props;
  const { name, login, website } = vaultItem.details;

  const [faviconUrl, setFaviconUrl] = useState<string>();

  useEffect(() => {
    getFavicon();
  }, []);

  useEffect(() => {
    getFavicon();
  }, [website]);

  async function getFavicon() {
    if (website) {
      const faviconUrl = faviconFetch({ hostname: website });
      setFaviconUrl(faviconUrl);
    } else {
      setFaviconUrl(emptyIcon);
    }
  }

  function handleBtnClick(): void {
    setCurItemId(itemId);
    setIsAddingItem(false);
  }

  return (
    <div className="item" onClick={handleBtnClick}>
      <img src={faviconUrl} alt="" width="24px" />
      <div className="item-info">
        <div className="service-name">{name}</div>
        {name && <span className="login">{login}</span>}
      </div>
    </div>
  );
}
