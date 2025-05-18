import { useState, useContext, ChangeEvent } from "react";
import {
  FolderModalContext,
  FolderModalContextType,
} from "../../../../providers/FolderProvider";

export function UseModalActions() {
  const { folders, setFolders, setIsFolderModalOpen } = useContext(
    FolderModalContext
  ) as FolderModalContextType;

  //? folder will be added to folders list with specific name
  const [folderName, setFolderName] = useState<string>("");

  function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    setFolderName(e.target.value);
  }

  function handleSaveBtnClick(): void {
    if (folderName.trim().length > 0) {
      setIsFolderModalOpen(false);
      setFolders([...folders, folderName]);
    }
  }

  function handleCancelBtnClick(): void {
    setIsFolderModalOpen(false);
  }

  return { handleInputChange, handleSaveBtnClick, handleCancelBtnClick };
}
