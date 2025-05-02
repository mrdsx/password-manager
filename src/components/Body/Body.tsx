import { Sidebar } from "../Navigation/Sidebar/Sidebar";
import { ItemList } from "../ItemList/ItemList";
import { DetailedItemInfo } from "../DetailedItemInfo/DetailedItemInfo";
import "./body.modules.css";

export function Body() {
  return (
    <main>
      <Sidebar />
      <ItemList />
      <DetailedItemInfo />
    </main>
  );
}