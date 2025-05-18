import { useContext } from "react";
import {
  FolderModalContext,
  FolderModalContextType,
} from "../../../providers/FolderProvider";

export function AddFolderBtn(): React.ReactElement {
  const { setIsFolderModalOpen } = useContext(
    FolderModalContext
  ) as FolderModalContextType;

  return (
    <button
      className="add-folder-btn"
      onClick={() => {
        setIsFolderModalOpen(true);
      }}
    >
      +
    </button>
  );
}
