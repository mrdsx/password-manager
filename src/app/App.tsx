import { useContext } from "react";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { LoginContext } from "../providers/LoginProvider";

export default function App(): React.ReactElement | undefined {
  const { isLoggedIn, isRegistered } = useContext(LoginContext);

  if (!isRegistered) return <Register />;
  else {
    if (isLoggedIn) return <Home />;
    if (!isLoggedIn) return <Login />;
  }
}
