import useGlobal, { State, Actions } from "../../utils/store";

interface VaultItemProps {
  icon: string;
  name: string;
  login: string;
  itemId: string;
}

export function VaultItem(props: VaultItemProps) {
  // @ts-ignore
  const [globalState, globalActions]: [State, Actions] = useGlobal();
  const { setCurItemId, setIsAddingItem } = globalActions;

  const { icon, name, login, itemId } = props;

  function handleBtnClick(): void {
    setCurItemId(itemId);
    setIsAddingItem(false);
  }

  return (
    <div className="item" onClick={handleBtnClick}>
      <img src={icon} alt="" width="24px" />
      <div className="item-info">
        <div className="service-name">{name}</div>
        <span className="login">{login}</span>
      </div>
    </div>
  );
}
