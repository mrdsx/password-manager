import { createContext, useState, ReactNode } from "react";

export type TabNameType = "All items" | "Favorite" | "Trash";

export interface TabContextType {
  curTab: TabNameType;
  setCurTab(tab: TabNameType): void;
}

export const TabContext = createContext<TabContextType | null>(null);

export function TabProvider({ children }: { children: ReactNode }) {
  const [curTab, setCurTab] = useState<TabNameType>("All items");

  return (
    <TabContext.Provider value={{ curTab, setCurTab }}>
      {children}
    </TabContext.Provider>
  );
}
