import { extendTheme, theme, ThemeOverride, } from "@chakra-ui/react"

const base: ThemeOverride = {
  fonts: {
    body: `Poppins, ${theme.fonts.body}`,
    heading: `Poppins, ${theme.fonts.heading}`,
    mono: 'mono, monospace'
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'normal',
      },
      defaultProps: {
        size: 'lg',
      },
    },
    Divider: {
      baseStyle: {
        borderColor: 'themed.accent2',
      },
    },
    Link: {
      baseStyle: {
        color: 'teal.500',
        textDecorationLine: 'underline'
      }
    }
  },
}

export const themeBase = extendTheme(base)