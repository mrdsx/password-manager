import { useContext } from "react";
import { TabName, TabContext, TabContextType } from "../../../app/App";
import "./tab-btn.modules.css";

interface TabBtnProps {
  tab: TabName;
  image?: string;
}

export function TabBtn(props: TabBtnProps) {
  const { curTab, setCurTab } = useContext(TabContext) as TabContextType;
  const { tab } = props;

  const isActive = curTab === tab ? "active" : "";

  return (
    <button
      onClick={() => {
        setCurTab(tab);
      }}
      className={`${isActive}`}
    >
      {tab}
    </button>
  );
}
