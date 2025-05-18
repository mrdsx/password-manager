// @ts-ignore
import faviconFetch from "favicon-fetch";
import { useEffect, useState } from "react";
import {
  validateDomain,
  validateURL,
} from "../../../../utils/validationMethods";
import emptyIcon from "../../../../assets/web.svg";

interface ActionProps {
  website: string;
}

interface VaultItemActions {
  faviconURL: string;
}

export function UseVaultItemActions(props: ActionProps): VaultItemActions {
  const [faviconURL, setFaviconURL] = useState<string>(emptyIcon);

  async function getFaviconURL(website: string): Promise<void> {
    let faviconURL = emptyIcon;

    if (validateURL(website)) {
      faviconURL = faviconFetch({ uri: website });
    } else if (validateDomain(website)) {
      faviconURL = faviconFetch({ hostname: website });
    }
    setFaviconURL(faviconURL);
  }

  useEffect(() => {
    getFaviconURL(props.website);
  }, []);

  useEffect(() => {
    getFaviconURL(props.website);
  }, [props.website]);

  return { faviconURL };
}
