import "./item.modules.css";

interface Item {
  icon: string,
  serviceName: string,
  login: string
}

export function Item ({ icon, serviceName, login }: Item ) {
  return (
    <div className="item">
      <img src={icon} alt="" width="32px" />
      <div className="item-info">
        <div className="service-name">{serviceName}</div>
        <span className="login">{login}</span>
      </div>
    </div>
  );
};