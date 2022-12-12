export function removePrefix(prefix: string, text: string) {
  return text.replace(new RegExp(`^${prefix}`), "");
}
