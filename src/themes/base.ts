import { extendTheme, theme, } from "@chakra-ui/react"

const base: typeof theme
  = {
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
    }
  },
}

export const themeBase = extendTheme(base)