import { createContext, useState } from "react";

export interface FolderModalContextType {
  isFolderModalOpen: boolean;
  setIsFolderModalOpen(isOpen: boolean): void;
  folders: string[];
  setFolders(folders: string[]): void;
  curFolderId: number;
  setCurFolderId(folderId: number): void;
}

export const FolderModalContext = createContext<FolderModalContextType | null>(
  null
);

export const notFolderTabId: number = -1;

export function FolderProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [isFolderModalOpen, setIsFolderModalOpen] = useState<boolean>(false);
  const [folders, setFolders] = useState<string[]>(["No folder"]);
  const [curFolderId, setCurFolderId] = useState<number>(notFolderTabId);

  const value = {
    isFolderModalOpen,
    setIsFolderModalOpen,
    folders,
    setFolders,
    curFolderId,
    setCurFolderId,
  };

  return (
    <FolderModalContext.Provider value={value}>
      {children}
    </FolderModalContext.Provider>
  );
}
