import useGlobal from "../../store";

export function SaveBtn() {
  const [ globalState, globalActions ] = useGlobal();
  
  return (
    <button id="save" onClick={()=> {
      handleBtnClick(globalState, globalActions);
    }}>Save</button>
  );
}

function handleBtnClick(state: any, actions: any): void {
  const isNameValid = typeof state.newLoginParams["name"] !== "undefined";

  if (!state.isAddingItem && isNameValid) {
    console.log("changed existing item");

    actions.setIsEditingItem(false);
  } else if (state.isAddingItem && isNameValid) {
    console.log("changed new item");

    actions.setIsAddingItem(false);
    actions.addItem(state.newLoginParams);
    actions.clearNewLoginParams();
  }
}