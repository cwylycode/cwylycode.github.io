import { themeBase } from "./base"
import { extendTheme, theme, withDefaultColorScheme } from "@chakra-ui/react"

const light//: typeof theme
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
      scheme: `${theme.colors.blue[500]}`,
      primary: `${theme.colors.gray[100]}`,
      secondary: `${theme.colors.gray[800]}`,
      accent1: `${theme.colors.white}`,
      accent2: `${theme.colors.gray[400]}`,
      accent3: `${theme.colors.black}`,
      accent4: `${theme.colors.black}`,
      accent5: `${theme.colors.black}`,
      accent6: `${theme.colors.black}`,
      accent7: `${theme.colors.black}`,
    }
  },
}

export const themeLight = extendTheme(
  light,
  withDefaultColorScheme({
    colorScheme: 'blue'
  }),
  themeBase
)