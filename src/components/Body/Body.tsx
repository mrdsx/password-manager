import { Sidebar } from "../Navigation/Sidebar/Sidebar";
import { ScrollableItems } from "../Navigation/ScrollableItems/ScrollableItems";
import { DetailedItemInfo } from "../ItemInfo/DetailedItemInfo";
import "./body.module.css";

export function Body() {
  return (
    <main>
      <Sidebar />
      <ScrollableItems />
      <DetailedItemInfo />
    </main>
  );
}