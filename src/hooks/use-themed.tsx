import { useContext, useEffect, useState } from "react";
import { Themeing, themesNames } from "../App";

interface themeProps extends themesNames {
  default: string | number
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
 * @returns string | number | undefined value based on the current theme
 */

export default function useThemed(themeValues: Partial<themeProps>): string | number | undefined {
  const currentTheme = useContext(Themeing)
  const val = themeValues[currentTheme as keyof themeProps]
  return val ? val : themeValues['default']
}