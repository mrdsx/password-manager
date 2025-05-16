import { useContext } from "react";
import {
  TabNameType,
  TabContext,
  TabContextType,
} from "../../../../providers/TabProvider";
import "./tab-btn.modules.css";

interface TabBtnProps {
  tab: TabNameType;
}

export function TabBtn(props: TabBtnProps) {
  const { curTab, setCurTab } = useContext(TabContext) as TabContextType;
  const { tab } = props;

  const tabClassName = curTab === tab ? "active" : "";

  return (
    <button
      onClick={() => {
        setCurTab(tab);
      }}
      className={`tab ${tabClassName}`}
    >
      {tab}
    </button>
  );
}
