import { themeBase } from "./base"
import { extendTheme, theme, withDefaultColorScheme } from "@chakra-ui/react"

const dark//: typeof theme 
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
      primary: 'rgb(20,20,20)',
      secondary: `${theme.colors.gray[200]}`,
      accent1: `${theme.colors.gray[900]}`,
      accent2: `${theme.colors.gray[600]}`,
      accent3: `${theme.colors.blue[300]}`,
      accent4: `${theme.colors.white}`,
      accent5: `${theme.colors.white}`,
      accent6: `${theme.colors.white}`,
      accent7: `${theme.colors.white}`,
    }
  },
}

export const themeDark = extendTheme(
  dark,
  withDefaultColorScheme({
    colorScheme: 'blue'
  }),
  themeBase
)