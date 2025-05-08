import { TabBtn } from "../../UI/TabBtn";
import { Tabs } from "../Tabs/Tabs";
import "./sidebar.modules.css";

export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="categories">
        <Tabs>
          <TabBtn tab={"All items"} />
          <TabBtn tab={"Favorite"} />
          <TabBtn tab={"Trash"} />
        </Tabs>
      </div>
      <div className="types">
        <button className="dropdown-btn">Types</button>
        <Tabs>
          <TabBtn tab={"Login"} />
          <TabBtn tab={"Card"} />
          <TabBtn tab={"Identity"} />
          <TabBtn tab={"Secure note"} />
        </Tabs>
      </div>
      <div className="folders">
        <button className="dropdown-btn">Folders</button>
        <button>No folder</button>
      </div>
    </div>
  );
}
