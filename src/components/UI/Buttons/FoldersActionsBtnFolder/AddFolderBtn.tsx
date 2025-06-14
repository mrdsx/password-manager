import { useAddFolderModalContext } from "../../Modals/AddFolderModal/AddFolderModalProvider";

export function AddFolderBtn(): React.ReactElement {
  const { setIsAddFolderModalOpen } = useAddFolderModalContext();

  return (
    <button
      className="add-folder"
      onClick={() => {
        setIsAddFolderModalOpen(true);
      }}
    >
      +
    </button>
  );
}
