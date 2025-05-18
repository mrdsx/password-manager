import { useContext } from "react";
import { AddFolderModal } from "../UI/Misc/AddFolderModal/AddFolderModal";
import {
  FolderModalContext,
  FolderModalContextType,
} from "../../providers/FolderProvider";
import "./modals.modules.css";

export function Modals(): React.ReactElement {
  const { isFolderModalOpen } = useContext(
    FolderModalContext
  ) as FolderModalContextType;

  return (
    <div className="modals">{isFolderModalOpen && <AddFolderModal />}</div>
  );
}
