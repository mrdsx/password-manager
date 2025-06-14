import { useState } from "react";
import { useFolderContext } from "../../../../providers/FolderProvider";
import { useAddFolderModalContext } from "./AddFolderModalProvider";

interface ModalActionsProps {
  saveBtnRef: React.RefObject<HTMLButtonElement | null>;
}

interface Actions {
  handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleKeyDown(e: KeyboardEvent): void;
  handleSaveBtnClick(): void;
  handleCancelBtnClick(): void;
}

export function useAddFolderModalActions(props: ModalActionsProps): Actions {
  const { folders, setFolders } = useFolderContext();
  const { setIsAddFolderModalOpen } = useAddFolderModalContext();

  //? folder will be added to folders list with specific name
  const [folderName, setFolderName] = useState<string>("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
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
