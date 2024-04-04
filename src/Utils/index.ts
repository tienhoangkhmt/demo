export const getLocal = (key: string) => {
  const values = localStorage.getItem(key);
  if(!values) return ''

  return JSON.parse(values)
}