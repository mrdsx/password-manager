import { useState, createContext } from "react";

interface IAddFolderModalContext {
  isEditFolderModalOpen: boolean;
  setIsEditFolderModalOpen(isOpen: boolean): void;
}

const initialValue: IAddFolderModalContext = {
  isEditFolderModalOpen: false,
  setIsEditFolderModalOpen() {},
};

export const EditFolderModalContext =
  createContext<IAddFolderModalContext>(initialValue);

export function EditFolderModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isEditFolderModalOpen, setIsEditFolderModalOpen] =
    useState<boolean>(false);

  const folderModalValue = {
    isEditFolderModalOpen,
    setIsEditFolderModalOpen,
  };

  return (
    <EditFolderModalContext value={folderModalValue}>
      {children}
    </EditFolderModalContext>
  );
}
