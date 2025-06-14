import { hashString } from "./stringMethods";

const LOCAL_STORAGE_PASSWORD_KEY = "password";

export function getLocalStoragePassword(): string | null {
  return localStorage.getItem(LOCAL_STORAGE_PASSWORD_KEY);
}

export async function setLocalStoragePassword(password: string): Promise<void> {
  const hashedPassword = await hashString(password);
  localStorage.setItem(LOCAL_STORAGE_PASSWORD_KEY, hashedPassword);
}
