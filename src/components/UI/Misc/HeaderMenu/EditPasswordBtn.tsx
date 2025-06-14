import { useHeaderMenu } from "../../../Navigation/Header/HeaderMenuState/HeaderMenuProvider";
import { useEditPasswordModalContext } from "../../Modals/EditPasswordModal/EditPasswordModalProvider";

export function EditPasswordBtn(): React.ReactElement {
  const { setIsEditPasswordModalOpen } = useEditPasswordModalContext();
  const { setIsHeaderMenuOpen } = useHeaderMenu();

  function handleClick(): void {
    setIsHeaderMenuOpen(false);
    setIsEditPasswordModalOpen(true);
  }

  return (
    <button className="menu__item" onClick={handleClick}>
      Edit password
    </button>
  );
}
