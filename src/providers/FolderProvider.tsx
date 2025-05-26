import { createContext, useEffect, useState } from "react";
import { FolderModalsProvider } from "./FolderModalsProvider";

interface IFolderContext {
  folders: string[];
  setFolders(folders: string[]): void;
  curFolderId: number;
  setCurFolderId(folderId: number): void;
}

const initialValue: IFolderContext = {
  folders: [],
  setFolders() {},
  curFolderId: 0,
  setCurFolderId() {},
};

export const FolderContext = createContext<IFolderContext>(initialValue);

//! MUST BE NEGATIVE
export const NOT_FOLDER_TAB_ID: -1 = -1;
//! MUST BE ZERO
export const DEFAULT_FOLDER_TAB_ID: 0 = 0;

export function FolderProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  let localStorageFolders = JSON.parse(localStorage.getItem("folders") || "[]");
  if (!localStorageFolders.includes("No folder")) {
    localStorageFolders = ["No folder", ...localStorageFolders];
  }

  const initialFolders = localStorageFolders || ["No folder"];
  const [folders, setFolders] = useState<string[]>(initialFolders);
  const [curFolderId, setCurFolderId] = useState<number>(NOT_FOLDER_TAB_ID);

  useEffect(() => {
    localStorage.setItem("folders", JSON.stringify(folders));
  }, [folders]);

  const folderValue = {
    folders,
    setFolders,
    curFolderId,
    setCurFolderId,
  };

  return (
    <FolderContext.Provider value={folderValue}>
      <FolderModalsProvider>{children}</FolderModalsProvider>
    </FolderContext.Provider>
  );
}
