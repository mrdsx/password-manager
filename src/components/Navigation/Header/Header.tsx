import { AppTitle } from "../../UI/Icons/AppIcon";
import { SearchBar } from "../../UI/Misc/SearchBar/SearchBar";
import { ToggleHeaderMenuBtn } from "../../UI/Buttons/ToggleHeaderMenuBtn/ToggleHeaderMenuBtn";
import { HeaderMenu } from "../../UI/Misc/HeaderMenu/HeaderMenu";
import { HeaderMenuProvider } from "./HeaderMenuState/HeaderMenuProvider";
import "./header.modules.css";

export function Header(): React.ReactElement {
  return (
    <header>
      <AppTitle />
      <SearchBar />
      <HeaderMenuProvider>
        <ToggleHeaderMenuBtn />
        <HeaderMenu />
      </HeaderMenuProvider>
    </header>
  );
}
