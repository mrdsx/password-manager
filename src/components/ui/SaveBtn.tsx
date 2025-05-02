import useGlobal from "../../store";

export function SaveBtn() {
  // @ts-ignore
  const [ globalState, globalActions ] = useGlobal();
  
  return (
    <button id="save" onClick={()=> {
      handleBtnClick(globalState, globalActions);
    }}>Save</button>
  );
}

function handleBtnClick(state: any, actions: any): void {
  actions.setIsEditingItem(false);
  if (state.isAddingItem) {
    actions.addItem(state.newLoginParams);
    actions.clearNewLoginParams();
  }
}