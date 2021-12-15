export function capFirstLetter(word: string): "Login" | "Regiter" | string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
