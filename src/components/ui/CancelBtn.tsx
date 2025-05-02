import useGlobal from "../../store/index";

export function CancelBtn() {
  const [ glolalState, globalActions ] = useGlobal();

  return (
    <button id="cancel" onClick={() => {
      globalActions.setIsEditingItem(false);
    }}>Cancel</button>
  );
}