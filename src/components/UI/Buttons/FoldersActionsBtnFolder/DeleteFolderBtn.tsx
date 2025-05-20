import { useContext } from "react";
import { DeleteBtn } from "../DeleteBtn";
import { FolderContext } from "../../../../providers/FolderProvider";
import { EditFolderModalContext } from "../../../../providers/EditFolderModalProvider";

export function DeleteFolderBtn(): React.ReactElement {
  const { folders, setFolders, curFolderId } = useContext(FolderContext);
  const { setIsEditFolderModalOpen } = useContext(EditFolderModalContext);

  function handleDeleteFolderBtnClick(): void {
    const nextFolders = folders.filter((_, index) => index !== curFolderId);
    setFolders(nextFolders);

    setIsEditFolderModalOpen(false);
  }

  return <DeleteBtn id="delete-folder" onClick={handleDeleteFolderBtnClick} />;
}
