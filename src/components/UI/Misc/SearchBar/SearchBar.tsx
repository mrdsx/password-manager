import { useRef } from "react";
import { SearchIcon } from "../../Icons/SearchIcon";
import { useSearchContext } from "../../../../providers/SearchProvider";
import "./search-bar.modules.css";

const ICON_SIZE = 16;

export function SearchBar(): React.ReactElement {
  const { setQuery } = useSearchContext();

  const searchFieldRef: React.RefObject<HTMLInputElement | null> = useRef(null);

  function handleClick() {
    searchFieldRef.current?.focus();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }
  return (
    <div className="search-bar" onClick={handleClick}>
      <SearchIcon width={ICON_SIZE} />
      <input
        type="text"
        id="search-field"
        ref={searchFieldRef}
        onChange={handleChange}
      />
    </div>
  );
}
