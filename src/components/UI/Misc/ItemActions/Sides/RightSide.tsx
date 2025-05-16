import useGlobal from "../../../../../store/store";
import { DeleteBtn } from "../../../Buttons/DeleteBtn";
import { RestoreBtn } from "../../../Buttons/RestoreBtn";

interface RightSideProps {
  editingExistingItem: boolean;
}

export function RightSide(props: RightSideProps) {
  // @ts-ignore
  const [globalState, globalActions] = useGlobal();
  const { vault, curItemId } = globalState;

  return (
    <div id="right" className="side">
      {props.editingExistingItem && (
        <>
          {vault[curItemId].inTrash && <RestoreBtn />}
          <DeleteBtn />
        </>
      )}
    </div>
  );
}
