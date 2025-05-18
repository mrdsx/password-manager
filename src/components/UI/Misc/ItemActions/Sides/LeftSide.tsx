import useGlobalStore, {
  Actions,
  State,
} from "../../../../../store/globalStore";
import { SaveItemBtn } from "../../../Buttons/SaveItemBtn/SaveBtn";
import { CancelBtn } from "../../../Buttons/CancelBtn";
import { EditItemBtn } from "../../../Buttons/EditItemBtn";

interface LeftSideProps {
  isEditingItem: boolean;
}

export function LeftSide(props: LeftSideProps): React.ReactElement {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobalStore();

  return (
    <div id="left" className="side">
      {props.isEditingItem ? (
        <>
          <SaveItemBtn />
          <CancelBtn
            onClick={() => {
              globalActions.setIsEditingItem(false);
            }}
          />
        </>
      ) : (
        <EditItemBtn />
      )}
    </div>
  );
}
