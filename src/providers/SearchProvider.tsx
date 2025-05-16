import { createContext, useState, ReactNode } from "react";

export interface SearchContextType {
  query: string;
  setQuery(query: string): void;
}

export const SearchContext = createContext<SearchContextType | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState<string>("");

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
}
