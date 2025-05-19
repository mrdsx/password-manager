import { useState, useContext, ChangeEvent } from "react";
import { FolderContext } from "../../../../providers/FolderProvider";
import { AddFolderModalContext } from "../../../../providers/AddFolderModalProvider";

interface ModalProps {
  saveBtnRef: React.RefObject<HTMLButtonElement | null>;
}

interface Actions {
  handleInputChange(e: ChangeEvent<HTMLInputElement>): void;
  handleKeyDown(e: KeyboardEvent): void;
  handleSaveBtnClick(): void;
  handleCancelBtnClick(): void;
}

export function UseModalActions(props: ModalProps): Actions {
  const { folders, setFolders } = useContext(FolderContext);
  const { setIsAddFolderModalOpen } = useContext(AddFolderModalContext);

  //? folder will be added to folders list with specific name
  const [folderName, setFolderName] = useState<string>("");

  function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    setFolderName(e.target.value);
  }

  function handleKeyDown(e: KeyboardEvent): void {
    if (e.key === "Enter") props.saveBtnRef.current?.click();
  }

  function handleSaveBtnClick(): void {
    if (folderName.trim().length > 0) {
      setIsAddFolderModalOpen(false);
      setFolders([...folders, folderName]);
    }
  }

  function handleCancelBtnClick(): void {
    setIsAddFolderModalOpen(false);
  }

  return {
    handleInputChange,
    handleKeyDown,
    handleSaveBtnClick,
    handleCancelBtnClick,
  };
}
