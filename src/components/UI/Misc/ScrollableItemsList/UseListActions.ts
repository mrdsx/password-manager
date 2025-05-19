import { useContext } from "react";
import { TabContext } from "../../../../providers/TabProvider";
import { SearchContext } from "../../../../providers/SearchProvider";
import useGlobalStore, { State, Actions } from "../../../../store/globalStore";

interface ListActions {
  getIsItemPassing(itemId: string): boolean;
}

export function UseListActions(): ListActions {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobalStore();
  const { vault } = globalState;

  const { curTab } = useContext(TabContext);
  const { query } = useContext(SearchContext);

  function getIsInSearchQuery(itemId: string): boolean {
    const { details } = vault[itemId];
    const name = details.name.toLowerCase();

    if (query.trim().length > 0) {
      return name.includes(query.toLowerCase());
    }
    return true;
  }

  function getIsItemPassing(itemId: string): boolean {
    if (itemId === "0") return false;

    const { favorite, inTrash } = vault[itemId];

    const itemInSearchQuery: boolean = getIsInSearchQuery(itemId);

    switch (curTab) {
      case "Favorite":
        return favorite && !inTrash && itemInSearchQuery;
      case "Trash":
        return inTrash && itemInSearchQuery;
      default:
        return !inTrash && itemInSearchQuery;
    }
  }

  return { getIsItemPassing };
}
