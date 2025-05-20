import { useContext } from "react";
import { AddFolderModalContext } from "../../../../providers/AddFolderModalProvider";

export function AddFolderBtn(): React.ReactElement {
  const { setIsAddFolderModalOpen } = useContext(AddFolderModalContext);

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
