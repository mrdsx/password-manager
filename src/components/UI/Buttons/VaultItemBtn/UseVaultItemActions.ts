// @ts-ignore
import faviconFetch from "favicon-fetch";
import { useState } from "react";
import {
  validateDomain,
  validateURL,
} from "../../../../utils/validationMethods";
import emptyIcon from "../../../../app/assets/web.svg";

interface VaultItemActions {
  faviconURL: string;
  getFaviconURL(website: string): Promise<void>;
}

export function UseVaultItemActions(): VaultItemActions {
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

  return { faviconURL, getFaviconURL };
}
