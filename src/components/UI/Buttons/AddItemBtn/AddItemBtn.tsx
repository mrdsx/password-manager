import useGlobal, { State, Actions } from "../../../../store/store";
import "./add-item-btn.modules.css";

export function AddItemBtn() {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobal();
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
