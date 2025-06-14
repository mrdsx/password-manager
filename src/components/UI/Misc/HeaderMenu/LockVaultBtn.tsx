import useAuthStore, {
  State as AuthState,
  Actions as AuthActions,
} from "../../../../store/authStore";

export function LockVaultBtn(): React.ReactElement {
  const [_authState, authActions]: [AuthState, AuthActions] = useAuthStore();
  const { setIsLoggedIn } = authActions;

  function handleClick(): void {
    setIsLoggedIn(false);
  }

  return (
    <button className="menu__item" onClick={handleClick}>
      Lock vault
    </button>
  );
}
