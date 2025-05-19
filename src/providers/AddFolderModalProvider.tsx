import { useState, createContext } from "react";

interface IAddFolderModalContext {
  isAddFolderModalOpen: boolean;
  setIsAddFolderModalOpen(isOpen: boolean): void;
}

const initialValue: IAddFolderModalContext = {
  isAddFolderModalOpen: false,
  setIsAddFolderModalOpen() {},
};

export const AddFolderModalContext =
  createContext<IAddFolderModalContext>(initialValue);

export function AddFolderModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAddFolderModalOpen, setIsAddFolderModalOpen] =
    useState<boolean>(false);

  const folderModalValue = {
    isAddFolderModalOpen,
    setIsAddFolderModalOpen,
  };

  return (
    <AddFolderModalContext.Provider value={folderModalValue}>
      {children}
    </AddFolderModalContext.Provider>
  );
}
