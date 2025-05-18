import { createContext, useState } from "react";

export interface SearchContextType {
  query: string;
  setQuery(query: string): void;
}

export const SearchContext = createContext<SearchContextType | null>(null);

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
