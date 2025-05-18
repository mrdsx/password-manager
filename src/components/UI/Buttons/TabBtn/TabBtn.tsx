import { useContext } from "react";
import { UseTabBtnActions } from "./UseTabBtnActions";
import {
  FolderModalContext,
  FolderModalContextType,
} from "../../../../providers/FolderProvider";
import { EditFolderBtn } from "../EditFolderBtn";
import "./tab-btn.modules.css";

interface TabBtnProps {
  tab: string;
  folderId?: number;
}

export function TabBtn(props: TabBtnProps): React.ReactElement {
  const { tab, folderId } = props;

  const { folders } = useContext(FolderModalContext) as FolderModalContextType;

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
        folderId > 0 && <EditFolderBtn />}
    </div>
  );
}
