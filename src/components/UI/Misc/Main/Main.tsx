import { TabProvider } from "./TabProvider";
import { ScrollableItems } from "../../../Navigation/ScrollableItems/ScrollableItems";
import { Sidebar } from "../../../Navigation/Sidebar/Sidebar";
import { ItemInfo } from "../ItemInfo/ItemInfo";
import "./main.modules.css";

export function Main(): React.ReactElement {
  return (
    <main>
      <TabProvider>
        <Sidebar />
        <ScrollableItems />
      </TabProvider>
      <ItemInfo />
    </main>
  );
}
