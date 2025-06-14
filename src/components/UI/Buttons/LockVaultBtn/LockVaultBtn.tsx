import useAuthStore, { State, Actions } from "../../../../store/authStore";
import "./lock-vault-btn.modules.css";

export function LockVaultBtn(): React.ReactElement {
  const [_AuthState, AuthActions]: [State, Actions] = useAuthStore();

  function handleClick(): void {
    AuthActions.setIsLoggedIn(false);
  }

  return (
    <input
      type="button"
      defaultValue="Lock vault"
      className="lock-vault-btn"
      onClick={handleClick}
    />
  );
}
