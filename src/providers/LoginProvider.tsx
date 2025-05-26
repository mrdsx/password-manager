import { createContext, useEffect, useState } from "react";

interface ILoginContext {
  isLoggedIn: boolean;
  setIsLoggedIn(isLoggedIn: boolean): void;
  isRegistered: boolean;
  setIsRegistered(isRegistered: boolean): void;
}

// TODO: set isLoggedIn false
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

  useEffect(() => {
    localStorage.setItem("isRegistered", JSON.stringify(isRegistered));
  }, [isRegistered]);

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
