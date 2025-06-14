import { useState, createContext, useContext } from "react";

interface IAddFolderModalContext {
  isAddFolderModalOpen: boolean;
  setIsAddFolderModalOpen(isOpen: boolean): void;
}

const initialValue: IAddFolderModalContext = {
  isAddFolderModalOpen: false,
  setIsAddFolderModalOpen() {},
};

const AddFolderModalContext =
  createContext<IAddFolderModalContext>(initialValue);

export function AddFolderModalProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [isAddFolderModalOpen, setIsAddFolderModalOpen] =
    useState<boolean>(false);

  const contextValue = {
    isAddFolderModalOpen,
    setIsAddFolderModalOpen,
  };

  return (
    <AddFolderModalContext.Provider value={contextValue}>
      {children}
    </AddFolderModalContext.Provider>
  );
}

export function useAddFolderModalContext() {
  return useContext(AddFolderModalContext);
}
