import { useContext, ReactNode } from "react";
import {
  FolderModalContext,
  FolderModalContextType,
  notFolderTabId,
} from "../../../../providers/FolderProvider";
import { defaultTabs } from "../../../Navigation/Sidebar/Sidebar";
import { GridIcon } from "../../Icons/GridIcon";
import { StarIcon } from "../../Icons/StarIcon";
import { TrashIcon } from "../../Icons/TrashIcon";
import { FolderIcon } from "../../Icons/FolderIcon";
import { TabContext, TabContextType } from "../../../../providers/TabProvider";

interface ActionProps {
  tab: string;
  folderId?: number | undefined;
}

interface TabBtnActions {
  getIcon(): ReactNode | undefined;
  getClassnameIfActive(): "active" | "";
  handleClick(): void;
}

const ICON_SIZE: number = 16;

export function UseTabBtnActions(props: ActionProps): TabBtnActions {
  const { tab, folderId = notFolderTabId } = props;

  const { folders, curFolderId, setCurFolderId } = useContext(
    FolderModalContext
  ) as FolderModalContextType;
  const { curTab, setCurTab } = useContext(TabContext) as TabContextType;

  //? enum keys
  const { allItems, favorite, trash } = defaultTabs;

  const isTabFolder = typeof folderId === "number" && folderId > notFolderTabId;

  function getIcon() {
    if (tab === allItems) return <GridIcon width={ICON_SIZE} />;
    else if (tab === favorite) return <StarIcon width={ICON_SIZE} />;
    else if (tab === trash) return <TrashIcon width={ICON_SIZE} />;
    else if (folders.includes(tab)) return <FolderIcon width={ICON_SIZE} />;
  }

  function getClassnameIfActive() {
    if (isTabFolder) {
      return curFolderId === folderId ? "active" : "";
    }
    return curTab === tab ? "active" : "";
  }

  function handleClick() {
    setCurTab(tab);
    if (isTabFolder) {
      setCurFolderId(folderId);
    } else {
      setCurFolderId(notFolderTabId);
    }
  }

  return { getIcon, getClassnameIfActive, handleClick };
}
