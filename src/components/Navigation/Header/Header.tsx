import { useContext, useEffect, useState } from "react";
import { AppIcon } from "../../UI/Icons/AppIcon";
import { SearchBar } from "../../UI/Misc/SearchBar/SearchBar";
import { AddFolderModalContext } from "../../../providers/AddFolderModalProvider";
import { EditFolderModalContext } from "../../../providers/EditFolderModalProvider";
import "./header.modules.css";

const ICON_SIZE: number = 32;

export function Header(): React.ReactElement {
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
    <header style={{ filter: `brightness(${filterVal}%)` }}>
      <AppIcon width={ICON_SIZE} />
      <SearchBar />
      <input type="button" defaultValue="Sign out" id="sign-out" />
    </header>
  );
}
