import { createContext, useContext, useState } from "react";

interface IEditPasswordModalContext {
  isEditPasswordModalOpen: boolean;
  setIsEditPasswordModalOpen(isOpen: boolean): void;
}

const initialValue: IEditPasswordModalContext = {
  isEditPasswordModalOpen: false,
  setIsEditPasswordModalOpen() {},
};

const EditPasswordModalContext =
  createContext<IEditPasswordModalContext>(initialValue);

export function EditPasswordModalProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [isEditPasswordModalOpen, setIsEditPasswordModalOpen] =
    useState<boolean>(false);

  const contextValue = {
    isEditPasswordModalOpen,
    setIsEditPasswordModalOpen,
  };

  return (
    <EditPasswordModalContext.Provider value={contextValue}>
      {children}
    </EditPasswordModalContext.Provider>
  );
}

export function useEditPasswordModalContext() {
  return useContext(EditPasswordModalContext);
}
