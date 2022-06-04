import { useEffect, useState } from 'react'
import { ChakraProvider, Container } from '@chakra-ui/react'

import AppShell from './components/AppShell'
import PageHome from './pages/PageHome'

import { themeLight } from './themes/light'
import { themeDark } from './themes/dark'
import { themeHacker } from './themes/hacker'
import { themeRandom } from './themes/random'

const SYSTEM_THEME = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ?
  'dark' : 'light'

export let CURRENT_THEME: string = SYSTEM_THEME

export interface themesNames {
  light: string,
  dark: string,
  hacker: string,
  random: string
}

const themes = {
  light: themeLight,
  dark: themeDark,
  hacker: themeHacker,
  random: themeRandom
}

export default function App() {
  const [currentPage, setPage] = useState()
  const [currentTheme, setTheme] = useState<string>(SYSTEM_THEME)
  CURRENT_THEME = currentTheme

  useEffect(() => {
    localStorage.removeItem("chakra-ui-color-mode")
  }, [])

  return (
    <ChakraProvider
      theme={themes[currentTheme as keyof themesNames]}
      resetCSS
    >
      <AppShell
        theme={currentTheme}
        setTheme={setTheme}
      >
        <PageHome />
      </AppShell>
    </ChakraProvider>
  )
}