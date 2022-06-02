import { themeBase } from "./base"
import { extendTheme, theme, withDefaultColorScheme } from "@chakra-ui/react"

const hacker//: typeof theme
  = {
  styles: {
    global: {
      body: {
        color: 'themed.secondary',
        bg: 'themed.primary',
      },
      '*::placeholder': {
        color: 'gray.400',
      },
      '*, *::before, &::after': {
        borderColor: 'gray.700'
      },
    }
  },
  colors: {
    themed: {
      scheme: `${theme.colors.green[500]}`,
      primary: `${theme.colors.black}`,
      secondary: `lime`,
      accent1: `${theme.colors.black}`,
      accent2: `limegreen`,
      accent3: `${theme.colors.white}`,
      accent4: `${theme.colors.white}`,
      accent5: `${theme.colors.white}`,
      accent6: `${theme.colors.white}`,
      accent7: `${theme.colors.white}`,
    }
  },
}

export const themeHacker = extendTheme(
  hacker,
  withDefaultColorScheme({
    colorScheme: 'green'
  }),
  themeBase
)