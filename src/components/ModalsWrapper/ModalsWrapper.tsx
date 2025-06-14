import { useAddFolderModalContext } from "../UI/Modals/AddFolderModal/AddFolderModalProvider";
import { useEditFolderModalContext } from "../UI/Modals/EditFolderModal/EditFolderModalProvider";
import { useEditPasswordModalContext } from "../UI/Modals/EditPasswordModal/EditPasswordModalProvider";
import { AddFolderModal } from "../UI/Modals/AddFolderModal/AddFolderModal";
import { EditFolderModal } from "../UI/Modals/EditFolderModal/EditFolderModal";
import { EditPasswordModal } from "../UI/Modals/EditPasswordModal/EditPasswordModal";
import "./modals-wrapper.modules.css";

export function ModalsWrapper(): React.ReactElement {
  const { isAddFolderModalOpen } = useAddFolderModalContext();
  const { isEditFolderModalOpen } = useEditFolderModalContext();
  const { isEditPasswordModalOpen } = useEditPasswordModalContext();

  return (
    <div className="modals">
      {isAddFolderModalOpen && <AddFolderModal />}
      {isEditFolderModalOpen && <EditFolderModal />}
      {isEditPasswordModalOpen && <EditPasswordModal />}
    </div>
  );
}
