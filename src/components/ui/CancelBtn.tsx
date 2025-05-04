import useGlobal, { Actions, State } from "../../utils/store";

export function CancelBtn() {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobal();

  function handleBtnClick(): void {
    globalActions.setIsEditingItem(false);
  }

  return (
    <button id="cancel" onClick={handleBtnClick}>
      Cancel
    </button>
  );
}
