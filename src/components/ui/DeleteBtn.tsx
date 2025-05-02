import useGlobal from "../../store/index";

export function DeleteBtn() {
  const [ globalState, globalActions ] = useGlobal();

  return (
    <button id="delete" onClick={() => {
      handleBtnClick(globalState, globalActions);
    }}>Delete</button>
  )
}

function handleBtnClick(state: any, actions: any): void {
  actions.setIsEditingItem(false);
  actions.removeItem(state.curItemId);
}