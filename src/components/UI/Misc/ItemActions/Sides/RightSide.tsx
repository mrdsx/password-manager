import useGlobalStore from "../../../../../store/globalStore";
import { DeleteItemBtn } from "../../../Buttons/DeleteItemBtn";
import { RestoreItemBtn } from "../../../Buttons/RestoreItemBtn";

interface RightSideProps {
  editingExistingItem: boolean;
}

export function RightSide(props: RightSideProps): React.ReactElement {
  // @ts-ignore
  const [globalState, globalActions] = useGlobalStore();
  const { vault, curItemId } = globalState;

  return (
    <div id="right" className="side">
      {props.editingExistingItem && (
        <>
          {vault[curItemId].inTrash && <RestoreItemBtn />}
          <DeleteItemBtn />
        </>
      )}
    </div>
  );
}
