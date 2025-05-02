import useGlobal from "../../store";

export function EditBtn() {
  // @ts-ignore
  const [ globalState, globalActions ] = useGlobal();
  
  return (
    <button id="edit" onClick={()=> {
      globalActions.setIsEditingItem(true);
    }}>Edit</button>
  );
}