import useGlobal, { State, Actions } from "../../utils/store";

export function AddItemBtn() {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { setCurItemId, setIsAddingItem } = globalActions;

  function handleBtnClick(): void {
    setCurItemId("0");
    setIsAddingItem(true);
  }

  return (
    <button id="add-item" onClick={handleBtnClick}>
      +
    </button>
  );
}
