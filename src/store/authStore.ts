// @ts-ignore
import GlobalHook, { Store } from "use-global-hook";

export interface State {
  isLoggedIn: boolean;
  isRegistered: boolean;
}

export interface Actions {
  setIsLoggedIn(isLoggedIn: boolean): void;
  setIsRegistered(isRegistered: boolean): void;
}

const initialState: State = {
  isLoggedIn: false,
  isRegistered: JSON.parse(localStorage.getItem("isRegistered") || "false"),
};

function setIsLoggedIn(
  store: Store<State, Actions>,
  isLoggedIn: boolean
): void {
  store.setState({ isLoggedIn });
}
function setIsRegistered(
  store: Store<State, Actions>,
  isRegistered: boolean
): void {
  store.setState({ isRegistered });
  localStorage.setItem("isRegistered", JSON.stringify(isRegistered));
}

const actions = {
  setIsLoggedIn,
  setIsRegistered,
};

const useAuthStore = GlobalHook<State, Actions>(initialState, actions);

export default useAuthStore;
