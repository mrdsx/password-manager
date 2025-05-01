import useGlobal from "../../store/index";
import "./vault-item.modules.css";

interface VaultItemProps {
  icon: string;
  serviceName: string;
  login: string;
  itemId: string
}

export function VaultItem({ icon, serviceName, login, itemId }: VaultItemProps ) {
  const [ globalState, globalActions ] = useGlobal();

  return (
    <div 
      className="item"
      onClick={() => {
        globalActions.setCurItemId(itemId);
      }}
    >
      <img src={icon} alt="" width="32px" />
      <div className="item-info">
        <div className="service-name">{serviceName}</div>
        <span className="login">{login}</span>
      </div>
    </div>
  );
};