import { AddFolderModalProvider } from "./AddFolderModalProvider";
import { EditFolderModalProvider } from "./EditFolderModalProvider";

export function FolderModalsProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <EditFolderModalProvider>
      <AddFolderModalProvider>{children}</AddFolderModalProvider>
    </EditFolderModalProvider>
  );
}
