import { AppIcon } from "../../UI/Icons/AppIcon";
import { SearchBar } from "../../UI/Misc/SearchBar/SearchBar";
import "./header.modules.css";

const ICON_SIZE: number = 32;

export function Header() {
  return (
    <header>
      <AppIcon width={ICON_SIZE} />
      <SearchBar />
      <input type="button" defaultValue="Sign out" id="sign-out" />
    </header>
  );
}
