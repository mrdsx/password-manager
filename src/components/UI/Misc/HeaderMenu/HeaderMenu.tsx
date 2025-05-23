import "./header-menu.modules.css";

interface HeaderMenuProps {
  isActionsMenuOpen: boolean;
}

export function HeaderMenu(props: HeaderMenuProps): React.ReactElement {
  const { isActionsMenuOpen } = props;
  const menuClassName = isActionsMenuOpen ? "active" : "";

  return (
    <div className={`header__menu ${menuClassName}`}>
      <button className="menu__item">Edit password</button>
      <button className="menu__item">Lock vault</button>
      <div className="separator"></div>
      <button className="menu__item delete">Delete vault</button>
    </div>
  );
}
