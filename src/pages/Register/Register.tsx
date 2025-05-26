import { useContext, useState } from "react";
import { LoginContext } from "../../providers/LoginProvider";
import { isPasswordStrong } from "../../utils/validationMethods";
import { hashString } from "../../utils/stringMethods";
import "./register.modules.css";

export function Register(): React.ReactElement {
  const { setIsRegistered } = useContext(LoginContext);

  const [errorSpanText, setErrorSpanText] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const password = (e.currentTarget[0] as HTMLInputElement).value;

    if (password.trim().length > 0 && isPasswordStrong(password)) {
      const hashedPassword = await hashString(password);
      localStorage.setItem("password", hashedPassword);

      setErrorSpanText("");
      setIsRegistered(true);
    } else {
      setErrorSpanText("Password must be at least 8 characters long");
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
      <span className="register__error">{errorSpanText}</span>
    </div>
  );
}
