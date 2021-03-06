import { useContext } from "react";
import { Themed, themesNames } from "../App";

interface themeProps extends themesNames {
  default: string
}

/**
 * React hook for setting css props based on the currently selected theme.
 *
 * @param {Partial} themeValues
 * Object with keys partially or fully matching theme names (e.g. 'light' and/or 'dark', etc). Can also pass in 'default' value that will be used with all themes not otherwise set.
 *
 * @example
 * color = useThemed({ light: 'black', dark: 'white' })
 * 
 * @example
 * borderColor = useThemed({default: 'blue', light: 'pink' })
 * 
 * @returns string | undefined value based on the current theme
 */

export default function useThemed(themeValues: Partial<themeProps>): string | undefined {
  const currentTheme = useContext(Themed)
  const val = themeValues[currentTheme as keyof themeProps]
  return val ? val : themeValues['default']
}