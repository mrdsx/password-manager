import { useContext } from "react";
import { PencilIcon } from "../../Icons/PencilIcon";
import { EditFolderModalContext } from "../../../../providers/EditFolderModalProvider";
import { FolderContext } from "../../../../providers/FolderProvider";

const ICON_SIZE: number = 16;

interface EditFolderBtnProps {
  folderId: number;
}

export function EditFolderBtn(props: EditFolderBtnProps): React.ReactElement {
  const { setCurFolderId } = useContext(FolderContext);
  const { isEditFolderModalOpen, setIsEditFolderModalOpen } = useContext(
    EditFolderModalContext
  );

  function handleClick(): void {
    setIsEditFolderModalOpen(!isEditFolderModalOpen);
    setCurFolderId(props.folderId);
  }

  return (
    <button className="edit-folder-btn" onClick={handleClick}>
      <PencilIcon width={ICON_SIZE} />
    </button>
  );
}
