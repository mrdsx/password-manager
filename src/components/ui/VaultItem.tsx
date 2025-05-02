import useGlobal from "../../store/index";

interface VaultItemProps {
  icon: string;
  name: string;
  login: string;
  itemId: string
}

export function VaultItem(props: VaultItemProps ) {
  // @ts-ignore
  const [ globalState, globalActions ] = useGlobal();

  const { icon, name, login, itemId } = props;

  return (
    <div 
      className="item"
      onClick={() => {
        globalActions.setCurItemId(itemId);
        globalActions.setIsAddingItem(false);
      }}
    >
      <img src={icon} alt="" width="24px" />
      <div className="item-info">
        <div className="service-name">{name}</div>
        <span className="login">{login}</span>
      </div>
    </div>
  );
}