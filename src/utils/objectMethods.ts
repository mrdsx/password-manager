export function areObjectsEqual<T extends Record<string, any>>(
  obj1: T,
  obj2: T
): boolean {
  if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;

  const entries1 = Object.entries(obj1);
  const entries2 = Object.entries(obj2);

  if (entries1.length !== entries2.length) {
    return false;
  }

  for (const [key, value] of entries1) {
    const _key = key as keyof object;
    if (!obj2.hasOwnProperty(_key) || obj2[_key] !== value) {
      return false;
    }
  }

  return true;
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
