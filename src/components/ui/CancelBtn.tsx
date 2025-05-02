import useGlobal from "../../store/index";

export function CancelBtn() {
  // @ts-ignore
  const [ glolalState, globalActions ] = useGlobal();

  return (
    <button id="cancel" onClick={() => {
      globalActions.setIsEditingItem(false);
    }}>Cancel</button>
  )
}