import { themeBase } from "./base"
import { extendTheme, theme, ThemeOverride, withDefaultColorScheme } from "@chakra-ui/react"

const light: ThemeOverride = {
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
      primary: `${theme.colors.gray[100]}`,
      secondary: `${theme.colors.gray[800]}`,
      accent1: `${theme.colors.white}`,
      accent2: `${theme.colors.gray[400]}`,
      accent3: `${theme.colors.green[300]}`,
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
    colorScheme: 'green'
  }),
  themeBase
)