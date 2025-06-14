import { createContext, useContext, useEffect, useState } from "react";

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

const FolderContext = createContext<IFolderContext>(initialValue);

//! NOT_FOLDER_TAB_ID always must be NEGATIVE
//! DEFAULT_FOLDER_TAB_ID always must be ZERO
export const NOT_FOLDER_TAB_ID = -1;
export const DEFAULT_FOLDER_TAB_ID = 0;

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

  const contextValue = {
    folders,
    setFolders,
    curFolderId,
    setCurFolderId,
  };

  return (
    <FolderContext.Provider value={contextValue}>
      {children}
    </FolderContext.Provider>
  );
}

export function useFolderContext() {
  return useContext(FolderContext);
}
