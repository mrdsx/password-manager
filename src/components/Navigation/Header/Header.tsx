import { AppIcon } from "../../UI/Icons/AppIcon";
import { SearchBar } from "../../UI/Misc/SearchBar/SearchBar";
import { ToggleHeaderMenuBtn } from "../../UI/Buttons/ToggleHeaderMenuBtn/ToggleHeaderMenuBtn";
import { HeaderMenu } from "../../UI/Misc/HeaderMenu/HeaderMenu";
import { HeaderMenuProvider } from "./HeaderMenuState/HeaderMenuProvider";
import "./header.modules.css";

const ICON_SIZE = 32;

export function Header(): React.ReactElement {
  return (
    <header>
      <AppIcon width={ICON_SIZE} />
      <SearchBar />
      <HeaderMenuProvider>
        <ToggleHeaderMenuBtn />
        <HeaderMenu />
      </HeaderMenuProvider>
    </header>
  );
}
