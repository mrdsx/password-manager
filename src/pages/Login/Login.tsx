import { useContext } from "react";
import { LoginContext } from "../../providers/LoginProvider";
import "./login.modules.css";
import { hashString } from "../../utils/stringMethods";

export function Login(): React.ReactElement {
  const { setIsLoggedIn } = useContext(LoginContext);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const inputPassword = (e.currentTarget[0] as HTMLInputElement).value;
    const hashedInputPassword = await hashString(inputPassword);

    const localStoragePassword = localStorage.getItem("password");

    if (hashedInputPassword === localStoragePassword) setIsLoggedIn(true);
  }

  return (
    <div className="login-form">
      <span className="login__title">Your vault is locked</span>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          className="login__password-input"
          type="password"
          placeholder="Master password"
        />
        <button className="login__submit-btn" type="submit">
          <span className="submit-btn__span">Login</span>
        </button>
      </form>
    </div>
  );
}
