import {
  useFolderContext,
  NOT_FOLDER_TAB_ID,
} from "../../../../providers/FolderProvider";
import { defaultTabs } from "../../../Navigation/Sidebar/Sidebar";
import { GridIcon } from "../../Icons/GridIcon";
import { StarIcon } from "../../Icons/StarIcon";
import { TrashIcon } from "../../Icons/TrashIcon";
import { FolderIcon } from "../../Icons/FolderIcon";
import { useTabContext } from "../../Misc/Main/TabProvider";

interface ActionProps {
  tab: string;
  folderId?: number | undefined;
}

interface TabBtnActions {
  getIcon(): React.ReactElement | undefined;
  getClassnameIfActive(): "active" | "";
  handleClick(): void;
}

const ICON_SIZE: number = 16;

export function UseTabBtnActions(props: ActionProps): TabBtnActions {
  const { tab: tabName, folderId = NOT_FOLDER_TAB_ID } = props;

  const { folders, curFolderId, setCurFolderId } = useFolderContext();
  const { curTab, setCurTab } = useTabContext();

  const { allItems, favorite, trash } = defaultTabs;

  const isTabFolder =
    typeof folderId === "number" && folderId !== NOT_FOLDER_TAB_ID;

  function getIcon(): React.ReactElement | undefined {
    if (folders.includes(tabName) && folderId !== NOT_FOLDER_TAB_ID)
      return <FolderIcon width={ICON_SIZE} />;
    else if (tabName === allItems) return <GridIcon width={ICON_SIZE} />;
    else if (tabName === favorite) return <StarIcon width={ICON_SIZE} />;
    else if (tabName === trash) return <TrashIcon width={ICON_SIZE} />;
  }

  function getClassnameIfActive(): "active" | "" {
    if (isTabFolder) {
      return curFolderId === folderId ? "active" : "";
    }
    return curTab === tabName && curFolderId === NOT_FOLDER_TAB_ID
      ? "active"
      : "";
  }

  function handleClick(): void {
    setCurTab(tabName);
    if (isTabFolder) {
      setCurFolderId(folderId);
    } else {
      setCurFolderId(NOT_FOLDER_TAB_ID);
    }
  }

  return { getIcon, getClassnameIfActive, handleClick };
}
