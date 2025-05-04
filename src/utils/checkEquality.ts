export function areObjectsEqual(obj1: object, obj2: object): boolean {
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
