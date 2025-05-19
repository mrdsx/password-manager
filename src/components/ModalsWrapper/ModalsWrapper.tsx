import { useContext } from "react";
import { AddFolderModalContext } from "../../providers/AddFolderModalProvider";
import { EditFolderModalContext } from "../../providers/EditFolderModalProvider";
import { AddFolderModal } from "../UI/Modals/AddFolderModal/AddFolderModal";
import { EditFolderModal } from "../UI/Modals/EditFolderModal/EditFolderModal";
import "./modals-wrapper.modules.css";

export function ModalsWrapper(): React.ReactElement {
  const { isAddFolderModalOpen } = useContext(AddFolderModalContext);
  const { isEditFolderModalOpen } = useContext(EditFolderModalContext);

  return (
    <div className="modals">
      {isAddFolderModalOpen && <AddFolderModal />}
      {isEditFolderModalOpen && <EditFolderModal />}
    </div>
  );
}
