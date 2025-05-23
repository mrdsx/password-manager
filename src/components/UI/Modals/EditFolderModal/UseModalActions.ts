import { useContext, useState } from "react";
import useGlobalStore, { Actions, State } from "../../../../store/globalStore";
import { FolderContext } from "../../../../providers/FolderProvider";
import { EditFolderModalContext } from "../../../../providers/EditFolderModalProvider";

interface ModalProps {
  saveBtnRef: React.RefObject<HTMLButtonElement | null>;
}

export function UseModalActions(props: ModalProps) {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobalStore();
  const { vault } = globalState;
  const { editItemById } = globalActions;

  const { folders, setFolders, curFolderId } = useContext(FolderContext);
  const { setIsEditFolderModalOpen } = useContext(EditFolderModalContext);

  const defaultFolderName = folders[curFolderId];

  const [newFolderName, setNewFolderName] = useState<string>(defaultFolderName);

  function modifyFolderNameIfHasChanges(): void {
    if (newFolderName !== defaultFolderName) {
      const nextFolders = [...folders];
      nextFolders[curFolderId] = newFolderName;
      setFolders(nextFolders);
    }
  }

  function filterAndModifyItemsCurFolder(): void {
    for (let itemId in vault) {
      if (vault[itemId].folder === folders[curFolderId]) {
        const item = vault[itemId];

        const nextItem = {
          ...item,
          folder: newFolderName,
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
    filterAndModifyItemsCurFolder();
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
