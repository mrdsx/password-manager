import { PencilIcon } from "../Icons/PencilIcon";

const ICON_SIZE: number = 16;

export function EditFolderBtn(): React.ReactElement {
  return (
    <button className="edit-folder-btn">
      <PencilIcon width={ICON_SIZE} />
    </button>
  );
}
