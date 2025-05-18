import { useContext, useState, useEffect } from "react";
import {
  FolderModalContext,
  FolderModalContextType,
} from "../../providers/FolderProvider";
import "./main.modules.css";

export function Main({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
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
    <main style={{ filter: `brightness(${filterVal}%)` }}>{children}</main>
  );
}
