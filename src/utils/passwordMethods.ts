import { getLocalStoragePassword } from "./storage";
import { hashString } from "./stringMethods";

export function isPasswordStrong(password: string): boolean {
  return password.length >= 8;
}

export async function validateOldAndNewPasswords(
  oldPassword: string,
  newPassword: string
): Promise<void | null> {
  const hashedOldPassword = await hashString(oldPassword);

  if (oldPassword.length === 0) {
    throw new Error("You haven't entered old password!");
  } else if (hashedOldPassword !== getLocalStoragePassword()) {
    throw new Error("Wrong old password!");
  } else if (newPassword.length === 0) {
    throw new Error("You haven't entered new password!");
  } else if (newPassword.length < 8) {
    throw new Error("Weak new password!");
  } else if (oldPassword === newPassword) {
    throw new Error(
      "The new password must be different from the old password!"
    );
  }
  return null;
}
