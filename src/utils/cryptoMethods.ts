// @ts-ignore
import crypto from "crypto-browserify";

const algorithm = "aes-256-cbc";
const secretKey = import.meta.env.VITE_CRYPTO_KEY;

export function encrypt(plainText: string): string {
  const cipher = crypto.createCipher(algorithm, secretKey);
  let encrypted = cipher.update(plainText, "utf8", "hex");
  return (encrypted += cipher.final("hex"));
}

export function decrypt(hash: string): string {
  const decipher = crypto.createDecipher(algorithm, secretKey);
  let decrypted = decipher.update(hash, "hex", "utf8");
  return (decrypted += decipher.final("utf8"));
}
