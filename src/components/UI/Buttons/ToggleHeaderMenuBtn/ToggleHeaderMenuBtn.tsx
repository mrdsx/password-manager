import { ThreeLinesIcon } from "../../Icons/ThreeLinesIcon";
import { useHeaderMenu } from "../../../Navigation/Header/HeaderMenuState/HeaderMenuProvider";
import "./toggle-header-menu-btn.modules.css";

const ICON_SIZE = 24;

export function ToggleHeaderMenuBtn(): React.ReactElement {
  const { isHeaderMenuOpen, setIsHeaderMenuOpen } = useHeaderMenu();

  function handleClick(): void {
    setIsHeaderMenuOpen(!isHeaderMenuOpen);
  }

  return (
    <button className="header__toggle-menu" onClick={handleClick}>
      <ThreeLinesIcon width={ICON_SIZE} />
    </button>
  );
}
