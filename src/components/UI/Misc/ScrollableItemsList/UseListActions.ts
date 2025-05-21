import { useContext } from "react";
import { TabContext } from "../../../../providers/TabProvider";
import { SearchContext } from "../../../../providers/SearchProvider";
import useGlobalStore, { State, Actions } from "../../../../store/globalStore";
import {
  FolderContext,
  NOT_FOLDER_TAB_ID,
} from "../../../../providers/FolderProvider";

interface ListActions {
  getIsItemPassing(itemId: string): boolean;
}

export function UseListActions(): ListActions {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobalStore();
  const { vault } = globalState;

  const { curTab } = useContext(TabContext);
  const { query } = useContext(SearchContext);
  const { folders, curFolderId } = useContext(FolderContext);

  function getIsInSearchQuery(itemId: string): boolean {
    const { details } = vault[itemId];
    const name = details.name.toLowerCase();

    if (query.trim().length > 0) {
      return name.includes(query.toLowerCase());
    }
    return true;
  }

  function getIsInCurFolder(itemId: string): boolean {
    return vault[itemId].folder === folders[curFolderId];
  }

  function getIsItemPassing(itemId: string): boolean {
    if (itemId === "0") return false;

    const itemInSearchQuery: boolean = getIsInSearchQuery(itemId);
    if (!itemInSearchQuery) return false;

    if (curFolderId !== NOT_FOLDER_TAB_ID) return getIsInCurFolder(itemId);

    const { favorite, inTrash } = vault[itemId];

    switch (curTab) {
      case "Favorite":
        return favorite && !inTrash;
      case "Trash":
        return inTrash;
      default:
        return !inTrash;
    }
  }

  return { getIsItemPassing };
}
