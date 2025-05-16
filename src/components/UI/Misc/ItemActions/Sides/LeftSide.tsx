import { CancelBtn } from "../../../Buttons/CancelBtn";
import { EditBtn } from "../../../Buttons/EditBtn";
import { SaveBtn } from "../../../Buttons/SaveBtn/SaveBtn";

interface LeftSideProps {
  isEditingItem: boolean;
}

export function LeftSide(props: LeftSideProps) {
  return (
    <div id="left" className="side">
      {props.isEditingItem ? (
        <>
          <SaveBtn /> <CancelBtn />
        </>
      ) : (
        <EditBtn />
      )}
    </div>
  );
}
