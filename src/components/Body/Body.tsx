import { Sidebar } from "../Sidebar/Sidebar";
import { ItemList } from "../ItemList/ItemList";
import { ItemInfo } from "../ItemInfo/ItemInfo";
import "./body.modules.css";

export function Body() {
  return (
    <main>
      <Sidebar />
      <ItemList />
      <ItemInfo />
    </main>
  );
}