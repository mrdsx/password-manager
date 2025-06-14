import { useState } from "react";
import { AddFolderBtn } from "../../Buttons/FoldersActionsBtnFolder/AddFolderBtn";
import { Tabs } from "../../../Navigation/Tabs/Tabs";
import { useFolderContext } from "../../../../providers/FolderProvider";
import { TabBtn } from "../../Buttons/TabBtn/TabBtn";
import { ToggleFoldersBtn } from "../../Buttons/FoldersActionsBtnFolder/ToggleFoldersBtn";
import "./folders.modules.css";

export function Folders(): React.ReactElement {
  const { folders } = useFolderContext();

  const [areFoldersOpen, setAreFoldersOpen] = useState<boolean>(true);

  return (
    <>
      <div className="folder-actions">
        <ToggleFoldersBtn
          onClickFn={() => {
            setAreFoldersOpen(!areFoldersOpen);
          }}
        />
        <AddFolderBtn />
      </div>

      {areFoldersOpen && (
        <Tabs>
          {folders.map((folder, index) => {
            return <TabBtn tab={folder} folderId={index} key={index} />;
          })}
        </Tabs>
      )}
    </>
  );
}
