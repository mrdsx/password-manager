import { useContext, useState, useEffect } from "react";
import { AddFolderModalContext } from "../../providers/AddFolderModalProvider";
import { EditFolderModalContext } from "../../providers/EditFolderModalProvider";
import "./main.modules.css";

export function Main({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const { isAddFolderModalOpen } = useContext(AddFolderModalContext);
  const { isEditFolderModalOpen } = useContext(EditFolderModalContext);

  const [filterVal, setFilterVal] = useState<number>(100);

  useEffect(() => {
    if (isAddFolderModalOpen || isEditFolderModalOpen) {
      setFilterVal(60);
    } else {
      setFilterVal(100);
    }
  }, [isAddFolderModalOpen, isEditFolderModalOpen]);

  return (
    <main style={{ filter: `brightness(${filterVal}%)` }}>{children}</main>
  );
}
