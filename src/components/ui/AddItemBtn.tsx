import useGlobal, { State, Actions } from "../../store/store";

export function AddItemBtn() {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { setCurItemId, setIsAddingItem } = globalActions;

  function handleClick(): void {
    setCurItemId("0");
    setIsAddingItem(true);
  }

  return (
    <button id="add-item" onClick={handleClick}>
      +
    </button>
  );
}
