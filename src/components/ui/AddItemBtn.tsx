import useGlobal from "../../store";

export function AddItemBtn() {
  const [ globalState, globalActions ] = useGlobal();

  return (
    <button
      onClick={() => {
        globalActions.setIsAddingItem(true);
      }}
    >+</button>
  );
}