import { useContext } from "react";
import { LoginContext } from "../../../../providers/LoginProvider";
import "./lock-vault-btn.modules.css";

export function LockVaultBtn(): React.ReactElement {
  const { setIsLoggedIn } = useContext(LoginContext);

  function handleClick(): void {
    setIsLoggedIn(false);
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
