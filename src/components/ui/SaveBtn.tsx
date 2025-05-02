import useGlobal from "../../store";

export function SaveBtn() {
  // @ts-ignore
  const [ globalState, globalActions ] = useGlobal();
  
  return (
    <button id="save" onClick={()=> {
      globalActions.setIsEditingItem(false);
    }}>Save</button>
  );
}