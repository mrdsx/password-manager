import { Home } from "../pages/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import useAuthStore, { State, Actions } from "../store/authStore";

export default function App(): React.ReactElement {
  const [authState, _authActions]: [State, Actions] = useAuthStore();

  if (!authState.isRegistered) return <Register />;
  if (!authState.isLoggedIn) return <Login />;
  return <Home />;
}
