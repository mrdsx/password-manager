import useGlobal, { State, Actions } from "../../utils/store";

export function DeleteBtn() {
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { curItemId } = globalState;
  const { removeItem, setIsEditingItem } = globalActions;

  function handleBtnClick(): void {
    setIsEditingItem(false);
    removeItem(curItemId);
  }

  return (
    <button id="delete" onClick={handleBtnClick}>
      Delete
    </button>
  );
}
