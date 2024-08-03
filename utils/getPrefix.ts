export const getPrefix = (index: number): string => {
  const prefixes = ['A', 'B', 'C', 'D'];
  return prefixes[index] || '';
};
