import { useState } from "react";
import useAuthStore, { Actions, State } from "../../store/authStore";
import { isPasswordStrong } from "../../utils/passwordMethods";
import { hashString } from "../../utils/stringMethods";
import { setLocalStoragePassword } from "../../utils/storage";
import "./register.modules.css";

export function Register(): React.ReactElement {
  const [_isRegistered, setIsRegistered] = useAuthStore(
    (state: State) => state.isRegistered,
    (actions: Actions) => actions.setIsRegistered
  );

  const [errorText, setErrorText] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const password = (e.currentTarget[0] as HTMLInputElement).value;

    if (password.trim().length > 0 && isPasswordStrong(password)) {
      const hashedPassword = await hashString(password);
      setLocalStoragePassword(hashedPassword);

      setErrorText("");
      setIsRegistered(true);
    } else {
      setErrorText("Password must be at least 8 characters long");
    }
  }

  return (
    <div className="register-form">
      <span className="register__title">Create your vault</span>
      <form
        className="register__form"
        name="register-form"
        onSubmit={handleSubmit}
      >
        <input
          className="register__password-input"
          type="password"
          placeholder="Master password"
        />
        <button className="register__submit-btn" type="submit">
          <span className="submit-btn__span">Register</span>
        </button>
      </form>
      <span className="register__error">{errorText}</span>
    </div>
  );
}
