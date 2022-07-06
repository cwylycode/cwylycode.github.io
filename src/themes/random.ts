import { themeBase } from "./base"
import { extendTheme, theme, withDefaultColorScheme } from "@chakra-ui/react"

const colors = [
  theme.colors.blue,
  theme.colors.cyan,
  theme.colors.gray,
  theme.colors.green,
  theme.colors.orange,
  theme.colors.pink,
  theme.colors.purple,
  theme.colors.red,
  theme.colors.teal,
  theme.colors.yellow
]

const ranges = [
  50,
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900
]

function randColor() {
  const c = Math.floor(Math.random() * colors.length)
  const r = Math.floor(Math.random() * ranges.length)
  // @ts-ignore
  return colors[c][ranges[r]]
}

const random//: typeof theme
  = {
  fonts: {
    body: `ComicSans, ${theme.fonts.body}`,
    heading: `ComicSans, ${theme.fonts.heading}`,
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
    }
  },
  colors: {
    themed: {
      scheme: randColor(),
      primary: randColor(),
      secondary: randColor(),
      accent1: randColor(),
      accent2: randColor(),
      accent3: randColor(),
      accent4: randColor(),
      accent5: randColor(),
      accent6: randColor(),
      accent7: randColor(),
    }
  },
}

export const themeRandom = extendTheme(
  random,
  withDefaultColorScheme({
    colorScheme: randColor()
  }),
  themeBase
)