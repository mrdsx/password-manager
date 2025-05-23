import { useContext, useState } from "react";
import { LoginContext } from "../../providers/LoginProvider";
import "./login.modules.css";
import { hashString } from "../../utils/stringMethods";

interface IPasswords {
  inputPassword: string;
  localStoragePassword: string | null;
}

export function Login(): React.ReactElement {
  const { setIsLoggedIn } = useContext(LoginContext);

  const [errorSpanText, setErrorSpanText] = useState<string>("");

  function getInputAndLocalStoragePassword(
    e: React.FormEvent<HTMLFormElement>
  ): IPasswords {
    const inputPassword = (e.currentTarget[0] as HTMLInputElement).value;
    const localStoragePassword = localStorage.getItem("password");

    return { inputPassword, localStoragePassword };
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { inputPassword, localStoragePassword } =
      getInputAndLocalStoragePassword(e);
    const hashedInputPassword = await hashString(inputPassword);

    if (hashedInputPassword === localStoragePassword) {
      setIsLoggedIn(true);
      setErrorSpanText("");
    } else {
      setErrorSpanText("Incorrect password");
    }
  }

  return (
    <div className="login-form">
      <span className="login__title">Your vault is locked</span>
      <form
        className="login__form"
        name="register-form"
        onSubmit={handleSubmit}
      >
        <input
          className="login__password-input"
          type="password"
          placeholder="Master password"
        />
        <button className="login__submit-btn" type="submit">
          <span className="submit-btn__span">Login</span>
        </button>
      </form>
      <span className="login__error">{errorSpanText}</span>
    </div>
  );
}
