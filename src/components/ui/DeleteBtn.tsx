import useGlobal from "../../store/index";

export function DeleteBtn() {
  // @ts-ignore
  const [ glolalState, globalActions ] = useGlobal();

  return (
    <button id="delete" onClick={() => {
      globalActions.setIsEditingItem(false);
    }}>Delete</button>
  )
}