import { useContext, useState } from "react";
import { FolderContext } from "../../../../providers/FolderProvider";
import { EditFolderModalContext } from "../../../../providers/EditFolderModalProvider";

interface ModalProps {
  saveBtnRef: React.RefObject<HTMLButtonElement | null>;
}

export function UseModalActions(props: ModalProps) {
  const { folders, setFolders, curFolderId } = useContext(FolderContext);
  const { setIsEditFolderModalOpen } = useContext(EditFolderModalContext);

  const defaultFolderName = folders[curFolderId];

  const [newFolderName, setNewFolderName] = useState<string>(defaultFolderName);

  function modifyFolderNameIfHasChanges(): void {
    if (defaultFolderName !== newFolderName) {
      const nextFolders = [...folders];
      nextFolders[curFolderId] = newFolderName;
      setFolders(nextFolders);
    }
  }

  function handleKeyDown(e: KeyboardEvent): void {
    if (e.key === "Enter") props.saveBtnRef.current?.click();
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setNewFolderName(e.target.value);
  }

  function handleSaveBtnClick(): void {
    setIsEditFolderModalOpen(false);
    modifyFolderNameIfHasChanges();
  }

  function handleCancelBtnClick(): void {
    setIsEditFolderModalOpen(false);
  }

  return {
    defaultFolderName,
    handleKeyDown,
    handleInputChange,
    handleSaveBtnClick,
    handleCancelBtnClick,
  };
}
