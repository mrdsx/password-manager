import { useContext } from "react";
import { UseTabBtnActions } from "./UseTabBtnActions";
import {
  FolderContext,
  DEFAULT_FOLDER_TAB_ID,
  NOT_FOLDER_TAB_ID,
} from "../../../../providers/FolderProvider";
import { EditFolderBtn } from "../EditFolderBtn";
import "./tab-btn.modules.css";

interface TabBtnProps {
  tab: string;
  folderId?: number;
}

export function TabBtn(props: TabBtnProps): React.ReactElement {
  const { tab, folderId = NOT_FOLDER_TAB_ID } = props;

  const { folders } = useContext(FolderContext);

  const { getIcon, getClassnameIfActive, handleClick } = UseTabBtnActions({
    tab,
    folderId,
  });

  const isActive = getClassnameIfActive();
  const icon = getIcon();

  return (
    <div className={`tab ${isActive}`}>
      <button className="tab-left-side" onClick={handleClick}>
        {icon}
        <span>{tab}</span>
      </button>

      {folders.includes(tab) &&
        typeof folderId === "number" &&
        folderId !== DEFAULT_FOLDER_TAB_ID && (
          <EditFolderBtn folderId={folderId} />
        )}
    </div>
  );
}
