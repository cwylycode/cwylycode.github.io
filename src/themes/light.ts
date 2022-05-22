import { themeBase } from "./base"
import { extendTheme } from "@chakra-ui/react"

export const themeLight = extendTheme({
  ...themeBase,
  colors: {
    gray: {
      '200': '#333333'
    }
  }
})