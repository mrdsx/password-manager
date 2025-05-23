import { createContext, useState } from "react";
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
  const [folders, setFolders] = useState<string[]>(["No folder"]);
  const [curFolderId, setCurFolderId] = useState<number>(NOT_FOLDER_TAB_ID);

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

// TODO: wrap modal providers in one element
