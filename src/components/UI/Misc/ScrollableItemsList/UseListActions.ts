import { useContext } from "react";
import { TabContext, TabContextType } from "../../../../providers/TabProvider";
import {
  SearchContext,
  SearchContextType,
} from "../../../../providers/SearchProvider";
import useGlobal, { State, Actions } from "../../../../store/store";

export function UseListActions() {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { vault } = globalState;

  const { curTab } = useContext(TabContext) as TabContextType;
  const { query } = useContext(SearchContext) as SearchContextType;

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
