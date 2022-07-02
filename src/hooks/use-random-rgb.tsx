/**
 * Returns a random rgb string value compatible with CSS properties and such
 * @example
 * const myColor = useRandomRgb()
 * @returns
 * string in the form of 'rgb(x, x, x)' where 'x' is a random value between 0-255
 */

export default function useRandomRgb() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}