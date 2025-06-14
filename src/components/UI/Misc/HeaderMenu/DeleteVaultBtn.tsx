import useGlobalStore, {
  State as GlobalState,
  Actions as GlobalActions,
} from "../../../../store/globalStore";
import useAuthStore, {
  State as AuthState,
  Actions as AuthActions,
} from "../../../../store/authStore";

export function DeleteVaultBtn(): React.ReactElement {
  const [_globalState, globalActions]: [GlobalState, GlobalActions] =
    useGlobalStore();
  const { deleteVault } = globalActions;

  const [_authState, authActions]: [AuthState, AuthActions] = useAuthStore();
  const { setIsLoggedIn, setIsRegistered } = authActions;

  function handleClick(): void {
    setIsLoggedIn(false);
    setIsRegistered(false);
    deleteVault();
  }

  return (
    <button className="menu__item delete" onClick={handleClick}>
      Delete vault
    </button>
  );
}
