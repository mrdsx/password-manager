import { useHeaderMenu } from "../../../Navigation/Header/HeaderMenuState/HeaderMenuProvider";
import { EditPasswordBtn } from "./EditPasswordBtn";
import { LockVaultBtn } from "./LockVaultBtn";
import { DeleteVaultBtn } from "./DeleteVaultBtn";
import "./header-menu.modules.css";

export function HeaderMenu(): React.ReactElement {
  const { isHeaderMenuOpen } = useHeaderMenu();
  if (!isHeaderMenuOpen) return <></>;

  const menuClassName = isHeaderMenuOpen ? "active" : "";

  return (
    <div className={`header__menu ${menuClassName}`}>
      <EditPasswordBtn />
      <LockVaultBtn />
      <div className="separator"></div>
      <DeleteVaultBtn />
    </div>
  );
}
