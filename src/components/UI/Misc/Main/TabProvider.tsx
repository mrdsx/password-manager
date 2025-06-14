import { createContext, useContext, useState } from "react";

interface ITabContext {
  curTab: string;
  setCurTab(tab: string): void;
}

const initialValue: ITabContext = {
  curTab: "All items",
  setCurTab() {},
};

const TabContext = createContext<ITabContext>(initialValue);

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

export function useTabContext() {
  return useContext(TabContext);
}
