import useGlobal from "../../store";

export function AddItemBtn() {
  // @ts-ignore
  const [ globalState, globalActions ] = useGlobal();

  return (
    <button
      onClick={() => {
        globalActions.setIsAddingItem(true);
      }}
    >+</button>
  );
}