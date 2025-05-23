import { useState } from "react";
import { AppIcon } from "../../UI/Icons/AppIcon";
import { SearchBar } from "../../UI/Misc/SearchBar/SearchBar";
import { ToggleMenuBtn } from "../../UI/Buttons/ToggleMenuBtn";
import { HeaderMenu } from "../../UI/Misc/HeaderMenu/HeaderMenu";
import "./header.modules.css";

const ICON_SIZE: number = 32;

export function Header(): React.ReactElement {
  const [isActionsMenuOpen, setIsActionsMenuOpen] = useState(false);

  return (
    <header>
      <AppIcon width={ICON_SIZE} />
      <SearchBar />
      <ToggleMenuBtn
        isActionsMenuOpen={isActionsMenuOpen}
        setIsActionsMenuOpen={setIsActionsMenuOpen}
      />
      {isActionsMenuOpen && (
        <HeaderMenu isActionsMenuOpen={isActionsMenuOpen} />
      )}
    </header>
  );
}
