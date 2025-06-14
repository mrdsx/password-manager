import { PencilIcon } from "../../Icons/PencilIcon";
import { useEditFolderModalContext } from "../../Modals/EditFolderModal/EditFolderModalProvider";
import { useFolderContext } from "../../../../providers/FolderProvider";

const ICON_SIZE: number = 16;

interface EditFolderBtnProps {
  folderId: number;
}

export function EditFolderBtn(props: EditFolderBtnProps): React.ReactElement {
  const { setCurFolderId } = useFolderContext();
  const { isEditFolderModalOpen, setIsEditFolderModalOpen } =
    useEditFolderModalContext();

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
