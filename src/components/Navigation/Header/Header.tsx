import { useContext, useEffect, useState } from "react";
import { AppIcon } from "../../UI/Icons/AppIcon";
import { SearchBar } from "../../UI/Misc/SearchBar/SearchBar";
import {
  FolderModalContext,
  FolderModalContextType,
} from "../../../providers/FolderProvider";
import "./header.modules.css";

const ICON_SIZE: number = 32;

export function Header(): React.ReactElement {
  const { isFolderModalOpen } = useContext(
    FolderModalContext
  ) as FolderModalContextType;

  const [filterVal, setFilterVal] = useState<number>(100);

  useEffect(() => {
    if (isFolderModalOpen) {
      setFilterVal(60);
    } else {
      setFilterVal(100);
    }
  }, [isFolderModalOpen]);

  return (
    <header style={{ filter: `brightness(${filterVal}%)` }}>
      <AppIcon width={ICON_SIZE} />
      <SearchBar />
      <input type="button" defaultValue="Sign out" id="sign-out" />
    </header>
  );
}
