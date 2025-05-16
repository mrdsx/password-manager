import { useRef, RefObject, ChangeEvent, useContext } from "react";
import "./search-bar.modules.css";
import { SearchIcon } from "../../Icons/SearchIcon";
import {
  SearchContext,
  SearchContextType,
} from "../../../../providers/SearchProvider";

const ICON_SIZE = 16;

export function SearchBar() {
  const { setQuery } = useContext(SearchContext) as SearchContextType;

  const searchFieldRef: RefObject<HTMLInputElement | null> = useRef(null);

  function handleClick() {
    searchFieldRef.current?.focus();
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
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
