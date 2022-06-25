import { ComponentStyleConfig, extendTheme, theme, } from "@chakra-ui/react"

const SvgContainer: ComponentStyleConfig = {
  baseStyle: {
    '& svg': {
      width: '100%',
      height: '100%',
      maxWidth: '100%',
      maxHeight: '100%',
    }
  },
  variants: {
    normal: {
      color: 'red'
    },
    doodle: {
      '& path': {
        stroke: 'themed.secondary',
        strokeWidth: '5'
      },
      '& [fill]:not([fill="none"])': {
        fill: 'themed.secondary'
      }
    },
  },
  defaultProps: {
    variant: 'normal'
  }
}

const base: typeof theme = {
  fonts: {
    body: `Poppins, ${theme.fonts.body}`,
    heading: `Poppins, ${theme.fonts.heading}`,
    mono: 'mono, monospace'
  },
  components: {
    SvgContainer,
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