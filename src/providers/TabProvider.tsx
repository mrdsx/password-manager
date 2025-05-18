import { createContext, useState } from "react";

export interface TabContextType {
  curTab: string;
  setCurTab(tab: string): void;
}

export const TabContext = createContext<TabContextType | null>(null);

export function TabProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [curTab, setCurTab] = useState<string>("All items");

  return (
    <TabContext.Provider value={{ curTab, setCurTab }}>
      {children}
    </TabContext.Provider>
  );
}
