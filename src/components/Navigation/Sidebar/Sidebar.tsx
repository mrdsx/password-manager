// force-semicolon: ignore-all
import { TabBtn } from "../../UI/Buttons/TabBtn/TabBtn";
import { Tabs } from "../Tabs/Tabs";
import { Folders } from "../../UI/Misc/TabGroupFolders/Folders";
import "./sidebar.modules.css";

export enum defaultTabs {
  allItems = "All items",
  favorite = "Favorite",
  trash = "Trash",
}

export function Sidebar(): React.ReactElement {
  return (
    <div className="sidebar">
      <div className="categories">
        <Tabs>
          <TabBtn tab={defaultTabs.allItems} />
          <TabBtn tab={defaultTabs.favorite} />
          <TabBtn tab={defaultTabs.trash} />
        </Tabs>
      </div>
      <div className="folders">
        <Folders />
      </div>
    </div>
  );
}
