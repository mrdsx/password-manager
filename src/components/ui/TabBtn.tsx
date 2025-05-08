import { useContext } from "react";
import { TabName, TabContext } from "../../app/App";

const CUR_TAB_BTN_STYLE = {
  fontWeight: "bold",
  color: "#6F9DE6",
};

export function TabBtn({ tab }: { tab: TabName }) {
  const { curTab, setCurTab } = useContext(TabContext);

  const tabBtnStyle = curTab === tab ? CUR_TAB_BTN_STYLE : {};

  return (
    <button
      onClick={() => {
        setCurTab(tab);
      }}
      style={tabBtnStyle}
    >
      {tab}
    </button>
  );
}
