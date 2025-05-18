import useGlobalStore, { State, Actions } from "../../../../store/globalStore";
import "./add-item-btn.modules.css";

export function AddItemBtn(): React.ReactElement {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobalStore();
  const { setCurItemId, setIsAddingItem } = globalActions;

  function handleClick(): void {
    setCurItemId("0");
    setIsAddingItem(true);
  }

  return (
    <div className="add-item-btn">
      <button id="add-item" onClick={handleClick}>
        +
      </button>
    </div>
  );
}
