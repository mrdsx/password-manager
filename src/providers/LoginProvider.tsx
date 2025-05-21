import { createContext, useState } from "react";

interface ILoginContext {
  isLoggedIn: boolean;
  setIsLoggedIn(isLoggedIn: boolean): void;
  isRegistered: boolean;
  setIsRegistered(isRegistered: boolean): void;
}

const initialValue: ILoginContext = {
  isLoggedIn: false,
  setIsLoggedIn() {},
  isRegistered: localStorage.getItem("isRegistered") === "true",
  setIsRegistered() {},
};

export const LoginContext = createContext(initialValue);

export function LoginProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(initialValue.isLoggedIn);
  const [isRegistered, setIsRegistered] = useState(initialValue.isRegistered);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    isRegistered,
    setIsRegistered,
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}
