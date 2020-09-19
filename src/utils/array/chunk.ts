export function chunk<T>(arr: T[], chunkSize: number): T[][] {
  const result = [];

  if (!arr.length) {
    return result;
  }

  let i = 0;
  while (i < arr.length) {
    const lastIndex = i + chunkSize;
    result.push(arr.slice(i, lastIndex));
    i = lastIndex;
  }
  return result;
}
