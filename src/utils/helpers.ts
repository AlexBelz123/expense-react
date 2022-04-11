export const filterByField = <T, K extends keyof T>(
  value: string,
  targetField: K,
  targetArray: T[]
) => targetArray.filter((item) => item[targetField] === (value as any));
