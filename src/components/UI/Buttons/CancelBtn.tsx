import useGlobal, { State, Actions } from "../../../store/store";

export function CancelBtn() {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobal();

  function handleClick(): void {
    globalActions.setIsEditingItem(false);
  }

  return (
    <button id="cancel" onClick={handleClick}>
      Cancel
    </button>
  );
}
