import { Sidebar } from "../Navigation/Sidebar/Sidebar";
import { ScrollableItems } from "../Navigation/ScrollableItems/ScrollableItems";
import { DetailedItemInfo } from "../ItemInfo/DetailedItemInfo";
import "./body.modules.css";

export function Body() {
  return (
    <main>
      <Sidebar />
      <ScrollableItems />
      <DetailedItemInfo />
    </main>
  );
}