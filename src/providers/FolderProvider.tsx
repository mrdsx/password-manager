import { createContext, useState } from "react";
import { AddFolderModalProvider } from "./AddFolderModalProvider";
import { EditFolderModalProvider } from "./EditFolderModalProvider";

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
  const [folders, setFolders] = useState<string[]>([
    "No folder",
    "Folder 1",
    "Folder 2",
  ]);
  const [curFolderId, setCurFolderId] = useState<number>(NOT_FOLDER_TAB_ID);

  const folderValue = {
    folders,
    setFolders,
    curFolderId,
    setCurFolderId,
  };

  return (
    <FolderContext.Provider value={folderValue}>
      <EditFolderModalProvider>
        <AddFolderModalProvider>{children}</AddFolderModalProvider>
      </EditFolderModalProvider>
    </FolderContext.Provider>
  );
}

// TODO: wrap modal providers in one wrapper
