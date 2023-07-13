/** Clone the provided value and any inner values. */
export function deepClone<T>(value: T): T {
  if (typeof value !== 'object' || value == null) {
    return value;
  } else if (value instanceof Array) {
    return value.map((innerValue) => {
      return deepClone(innerValue);
    }) as any as T;
  }

  // Sort properties by their names.
  const valueEntries = Object.entries(value).sort(([key1], [key2]) => {
    return key1.localeCompare(key2);
  });

  return valueEntries.reduce((clone, [key, innerValue]) => {
    clone[key as keyof(T)] = deepClone(innerValue) as T[keyof(T)];
    return clone;
  }, {} as T);
}
