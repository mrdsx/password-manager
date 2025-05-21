import { useContext } from "react";
import { FolderContext } from "../../../../../../providers/FolderProvider";
import useGlobalStore from "../../../../../../store/globalStore";

interface SelectProps {
  onSelectChangeFn(e: React.ChangeEvent<HTMLSelectElement>): void;
}

export function DetailFieldSelect(props: SelectProps): React.ReactElement {
  // @ts-ignore
  const [globalState, globalActions] = useGlobalStore();
  const { vault, curItemId } = globalState;

  const { folders } = useContext(FolderContext);

  const { onSelectChangeFn } = props;

  return (
    <select
      id="folders"
      onChange={onSelectChangeFn}
      defaultValue={vault[curItemId].folder}
    >
      {folders.map((folder, index) => {
        return <option key={index}>{folder}</option>;
      })}
    </select>
  );
}
