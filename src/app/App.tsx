import { useState, createContext } from "react";
import { Header } from "../components/Navigation/Header/Header";
import { Body } from "../components/Body/Body";
import { Sidebar } from "../components/Navigation/Sidebar/Sidebar";
import { ScrollableItems } from "../components/Navigation/ScrollableItems/ScrollableItems";
import { DetailedItemInfo } from "../components/ItemInfo/DetailedItemInfo";

export type TabName =
  | "All items"
  | "Favorite"
  | "Trash"
  | "Login"
  | "Card"
  | "Identity"
  | "Secure note";

export const TabContext = createContext(null as any);

export default function App() {
  const [curTab, setCurTab] = useState<TabName>("All items");

  return (
    <>
      <Header />
      <Body>
        <TabContext.Provider value={{ curTab, setCurTab }}>
          <Sidebar />
          <ScrollableItems />
        </TabContext.Provider>
        <DetailedItemInfo />
      </Body>
    </>
  );
}
