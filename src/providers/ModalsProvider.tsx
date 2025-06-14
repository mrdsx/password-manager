import { AddFolderModalProvider } from "../components/UI/Modals/AddFolderModal/AddFolderModalProvider";
import { EditFolderModalProvider } from "../components/UI/Modals/EditFolderModal/EditFolderModalProvider";
import { EditPasswordModalProvider } from "../components/UI/Modals/EditPasswordModal/EditPasswordModalProvider";

export function ModalsProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <EditPasswordModalProvider>
      <EditFolderModalProvider>
        <AddFolderModalProvider>{children}</AddFolderModalProvider>
      </EditFolderModalProvider>
    </EditPasswordModalProvider>
  );
}
