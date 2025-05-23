import { ThreeLinesIcon } from "../Icons/ThreeLinesIcon";

interface ToggleMenuBtnProps {
  isActionsMenuOpen: boolean;
  setIsActionsMenuOpen(isOpen: boolean): void;
}

const ICON_SIZE: number = 24;

export function ToggleMenuBtn(props: ToggleMenuBtnProps): React.ReactElement {
  const { isActionsMenuOpen, setIsActionsMenuOpen } = props;

  function handleClick(): void {
    setIsActionsMenuOpen(!isActionsMenuOpen);
  }

  return (
    <button className="header__open-menu" onClick={handleClick}>
      <ThreeLinesIcon width={ICON_SIZE} />
    </button>
  );
}
