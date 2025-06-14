import { createContext, useContext, useState } from "react";

interface IHeaderMenuContext {
  isHeaderMenuOpen: boolean;
  setIsHeaderMenuOpen(isOpen: boolean): void;
}

const initialValue: IHeaderMenuContext = {
  isHeaderMenuOpen: false,
  setIsHeaderMenuOpen() {},
};

const HeaderMenuContext = createContext<IHeaderMenuContext>(initialValue);

export function HeaderMenuProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);

  const contextValue = {
    isHeaderMenuOpen,
    setIsHeaderMenuOpen,
  };

  return (
    <HeaderMenuContext.Provider value={contextValue}>
      {children}
    </HeaderMenuContext.Provider>
  );
}

export function useHeaderMenu(): IHeaderMenuContext {
  return useContext(HeaderMenuContext);
}
