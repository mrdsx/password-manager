import { createContext, useState } from "react";

interface ISearchContext {
  query: string;
  setQuery(query: string): void;
}

const initialValue: ISearchContext = {
  query: "",
  setQuery() {},
};

export const SearchContext = createContext<ISearchContext>(initialValue);

export function SearchProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [query, setQuery] = useState<string>("");

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
}
