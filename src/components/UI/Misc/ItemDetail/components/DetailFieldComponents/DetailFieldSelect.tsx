import useGlobalStore, {
  State,
  Actions,
} from "../../../../../../store/globalStore";
import { useFolderContext } from "../../../../../../providers/FolderProvider";

interface SelectProps {
  onSelectChangeFn(e: React.ChangeEvent<HTMLSelectElement>): void;
}

export function DetailFieldSelect(props: SelectProps): React.ReactElement {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobalStore();
  const { vault, curItemId } = globalState;

  const { folders } = useFolderContext();

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
