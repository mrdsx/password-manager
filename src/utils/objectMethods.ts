import { encrypt, decrypt } from "./cryptoMethods";

const encryptedObjectType = "string";

export function areObjectsEqual<T extends Record<string, any>>(
  obj1: T,
  obj2: T
): boolean {
  const objKeys1 = Object.keys(obj1);
  const objKeys2 = Object.entries(obj2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (let key of objKeys1) {
    const value1 = obj1[key];
    const value2 = obj2[key];

    const isObjects = isObject(value1) && isObject(value2);

    if (
      (isObjects && !areObjectsEqual(value1, value2)) ||
      (!isObjects && value1 !== value2)
    ) {
      return false;
    }
  }
  return true;
}

function isObject<T extends Record<string, any>>(object: T): boolean {
  return object != null && typeof object === "object";
}

export function setObjectValuesEmpty<T extends Record<string, any>>(obj: T): T {
  const emptyItem: T = { ...obj };

  for (let key in emptyItem) {
    if (emptyItem.hasOwnProperty(key)) {
      emptyItem[key] = "" as T[typeof key];
    }
  }

  return emptyItem;
}

export function decryptObjectIfEncrypted<T extends Record<string, any>>(
  object: T | string
): T {
  if (typeof object === encryptedObjectType) {
    return JSON.parse(decrypt(object as string));
  }
  return object as T;
}

export function encryptObjectIfDecrypted<T extends Record<string, any>>(
  object: T | string
): string {
  if (typeof object !== encryptedObjectType) {
    return encrypt(JSON.stringify(object));
  }
  return object as string;
}
