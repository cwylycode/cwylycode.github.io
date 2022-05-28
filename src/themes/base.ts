import { extendTheme, theme, } from "@chakra-ui/react"

// console.log(theme.styles)

const base//: typeof theme
  = {
  fonts: {
    body: `Poppins, ${theme.fonts?.body}`,
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
    }
  },
}

export const themeBase = extendTheme(base)