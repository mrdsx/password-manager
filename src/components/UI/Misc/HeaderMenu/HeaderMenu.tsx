import { useContext } from "react";
import { LoginContext } from "../../../../providers/LoginProvider";
import useGlobalStore, { Actions, State } from "../../../../store/globalStore";
import "./header-menu.modules.css";

interface HeaderMenuProps {
  isActionsMenuOpen: boolean;
}

export function HeaderMenu(props: HeaderMenuProps): React.ReactElement {
  const { isActionsMenuOpen } = props;
  const menuClassName = isActionsMenuOpen ? "active" : "";

  const [vault, deleteVault] = useGlobalStore<string, (value: string) => void>(
    (state: State) => state.vault,
    (actions: Actions) => actions.deleteVault
  );
  const { setIsLoggedIn, setIsRegistered } = useContext(LoginContext);

  function handleLockVaultBtnClick(): void {
    setIsLoggedIn(false);
  }

  function handleDeleteVaultBtnClick(): void {
    setIsRegistered(false);
    deleteVault();
  }

  return (
    <div className={`header__menu ${menuClassName}`}>
      <button className="menu__item">Edit password</button>
      <button className="menu__item" onClick={handleLockVaultBtnClick}>
        Lock vault
      </button>
      <div className="separator"></div>
      <button className="menu__item delete" onClick={handleDeleteVaultBtnClick}>
        Delete vault
      </button>
    </div>
  );
}
