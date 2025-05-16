import { TabBtn } from "../../UI/Buttons/TabBtn/TabBtn";
import { Tabs } from "../Tabs/Tabs";
import "./sidebar.modules.css";

export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="categories">
        <Tabs>
          <TabBtn tab="All items" />
          <TabBtn tab="Favorite" />
          <TabBtn tab="Trash" />
        </Tabs>
      </div>
      <div className="folders">
        <button className="dropdown-btn">Folders</button>
        <button>No folder</button>
      </div>
    </div>
  );
}
