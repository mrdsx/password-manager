import { useState } from "react";
import useGlobalStore, {
  Actions as GlobalActions,
  State as GlobalState,
} from "../../../../store/globalStore";
import { useFolderContext } from "../../../../providers/FolderProvider";
import { useEditFolderModalContext } from "./EditFolderModalProvider";

interface ModalActionsProps {
  saveBtnRef: React.RefObject<HTMLButtonElement | null>;
}

interface Actions {
  defaultFolderName: string;
  handleKeyDown(e: KeyboardEvent): void;
  handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleSaveBtnClick(): void;
  handleCancelBtnClick(): void;
  handleDeleteBtnClick(): void;
}

export function useEditFolderModalActions(props: ModalActionsProps): Actions {
  const [globalState, globalActions]: [GlobalState, GlobalActions] =
    useGlobalStore();
  const { vault } = globalState;
  const { editItemById } = globalActions;

  const { folders, setFolders, curFolderId } = useFolderContext();
  const { setIsEditFolderModalOpen } = useEditFolderModalContext();

  const defaultFolderName = folders[curFolderId];
  const [newFolderName, setNewFolderName] = useState<string>(defaultFolderName);

  function modifyFolderNameIfHasChanges(): void {
    if (newFolderName !== defaultFolderName) {
      const nextFolders = [...folders];
      nextFolders[curFolderId] = newFolderName;
      setFolders(nextFolders);
    }
  }

  function filterAndModifyItemsFolder(folderName: string): void {
    for (let itemId in vault) {
      if (vault[itemId].folder === folderName) {
        const nextItem = {
          ...vault[itemId],
          folder: newFolderName,
        };
        editItemById(nextItem, itemId);
      }
    }
  }

  function setDefaultFolderToItemsInFolder(folderName: string): void {
    for (let itemId in vault) {
      if (vault[itemId].folder === folderName) {
        const nextItem = {
          ...vault[itemId],
          folder: "No folder",
        };
        editItemById(nextItem, itemId);
      }
    }
  }

  function handleKeyDown(e: KeyboardEvent): void {
    if (e.key === "Enter") props.saveBtnRef.current?.click();
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setNewFolderName(e.target.value);
  }

  function handleSaveBtnClick(): void {
    if (newFolderName.trim().length <= 0) return;

    setIsEditFolderModalOpen(false);
    modifyFolderNameIfHasChanges();
    filterAndModifyItemsFolder(folders[curFolderId]);
  }

  function handleCancelBtnClick(): void {
    setIsEditFolderModalOpen(false);
  }

  function handleDeleteBtnClick(): void {
    const nextFolders = folders.filter((_, index) => index !== curFolderId);
    setFolders(nextFolders);
    setIsEditFolderModalOpen(false);
    setDefaultFolderToItemsInFolder(folders[curFolderId]);
  }

  return {
    defaultFolderName,
    handleKeyDown,
    handleInputChange,
    handleSaveBtnClick,
    handleCancelBtnClick,
    handleDeleteBtnClick,
  };
}
