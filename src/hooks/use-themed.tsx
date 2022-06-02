import { CURRENT_THEME, themesNames } from "../App";

/**
 * React hook for setting css props based on the currently selected theme.
 *
 * @param themeValues
 * Object with keys partially or fully matching theme names (e.g. 'light' and/or 'dark', etc)
 *
 * @example
 * color = useThemed({ light: 'black', dark: 'white' })
 * 
 * @example
 * borderColor = useThemed({ light: 'pink' })
 */

export default function useThemed(themeValues: Partial<Record<string, any>>): string | number {
  return themeValues[CURRENT_THEME as keyof themesNames]
}