import { useState, createContext, useContext } from "react";

interface IEditFolderModalContext {
  isEditFolderModalOpen: boolean;
  setIsEditFolderModalOpen(isOpen: boolean): void;
}

const initialValue: IEditFolderModalContext = {
  isEditFolderModalOpen: false,
  setIsEditFolderModalOpen() {},
};

const EditFolderModalContext =
  createContext<IEditFolderModalContext>(initialValue);

export function EditFolderModalProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [isEditFolderModalOpen, setIsEditFolderModalOpen] =
    useState<boolean>(false);

  const contextValue = {
    isEditFolderModalOpen,
    setIsEditFolderModalOpen,
  };

  return (
    <EditFolderModalContext value={contextValue}>
      {children}
    </EditFolderModalContext>
  );
}

export function useEditFolderModalContext() {
  return useContext(EditFolderModalContext);
}
