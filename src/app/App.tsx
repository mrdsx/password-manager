import { useState, createContext } from "react";
import { Header } from "../components/Navigation/Header/Header";
import { Body } from "../components/Body/Body";
import { Sidebar } from "../components/Navigation/Sidebar/Sidebar";
import { ScrollableItems } from "../components/Navigation/ScrollableItems/ScrollableItems";
import { ItemInfo } from "../components/ItemInfo/ItemInfo";

export type TabName =
  | "All items"
  | "Favorite"
  | "Trash"
  | "Login"
  | "Card"
  | "Identity"
  | "Secure note";

export interface TabContextType {
  curTab: TabName;
  setCurTab: (tab: TabName) => void;
}

export const TabContext = createContext<TabContextType | null>(null);

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
        <ItemInfo />
      </Body>
    </>
  );
}
