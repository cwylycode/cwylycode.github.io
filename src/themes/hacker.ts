import { themeBase } from "./base"
import { extendTheme, theme, ThemeOverride, withDefaultVariant } from "@chakra-ui/react"

const borderStyles = {
  borderStyle: 'dashed !important',
  borderColor: 'themed.secondary'
}

const hacker: ThemeOverride = {
  fonts: {
    body: `monospace, ${theme.fonts.body}`,
    heading: `asciid, ${theme.fonts.heading}`,
    mono: 'mono, monospace'
  },
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
    },
  },
  colors: {
    themed: {
      scheme: 'green',
      primary: `${theme.colors.black}`,
      secondary: 'lime',
      accent1: `${theme.colors.black}`,
      accent2: 'limegreen',
      accent3: 'lime',
      accent4: 'green',
      accent5: `${theme.colors.black}`,
      accent6: 'lime',
      accent7: `${theme.colors.black}`,
    }
  },
  components: {
    Button: {
      baseStyle: {
        ...borderStyles,
        _hover: {
          backgroundColor: 'limegreen !important',
          color: 'white'
        }
      }
    },
    Divider: {
      baseStyle: {
        ...borderStyles
      }
    }
  }
}

export const themeHacker = extendTheme(
  hacker,
  withDefaultVariant({
    variant: 'outline'
  }),
  themeBase
)