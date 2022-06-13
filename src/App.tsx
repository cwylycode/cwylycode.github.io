import { createContext, useEffect, useState } from 'react'
import { Box, ChakraProvider, Fade } from '@chakra-ui/react'

import AppShell from './components/AppShell'

import PageHome from './pages/PageHome'
import PageAbout from './pages/PageAbout'
import PageSkillz from './pages/PageSkillz'
import PageShowcase from './pages/PageShowcase'
import PageContact from './pages/PageContact'

import { themeLight } from './themes/light'
import { themeDark } from './themes/dark'
import { themeHacker } from './themes/hacker'
import { themeRandom } from './themes/random'

const DEBUG = {
  loadingIntro: true,
  loadingPages: true,
  defaultPage: null
}

const SYSTEM_THEME = (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) ? 'dark' : 'light'

export const Themeing = createContext<string>(SYSTEM_THEME)

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

interface pagesNames {
  home: string
  about: string
  skillz: string
  showcase: string
  contact: string
}

const pages = {
  home: <PageHome />,
  about: <PageAbout />,
  skillz: <PageSkillz />,
  showcase: <PageShowcase />,
  contact: <PageContact />
}

export default function App() {
  const [currentPage, setPage] = useState<string>('home')
  const [currentTheme, setTheme] = useState<string>(SYSTEM_THEME)
  const [pageFade, setPageFade] = useState<boolean>(false)
  const pageFadeSpeed: number = 2

  useEffect(() => {
    localStorage.removeItem("chakra-ui-color-mode")
  }, [])

  function changeTheme(t: string) {
    setTheme(t)
  }

  function changePage(p: string) {
    console.log('clicked ' + p)
    // setPageFade(true)
    // setTimeout(() => {
    //   setPageFade(false)
    //   setPage(p)
    // }, 1000 * pageFadeSpeed + 0.5);
    // import('./pages/PageAbout')
  }

  return (
    <ChakraProvider
      theme={themes[currentTheme as keyof themesNames]}
      resetCSS
    >
      <Themeing.Provider value={currentTheme}>
        <AppShell
          theme={currentTheme}
          changeTheme={changeTheme}
          changePage={changePage}
        >
          <Fade
            in={pageFade}
            transition={{ enter: { duration: pageFadeSpeed }, exit: { duration: pageFadeSpeed } }}>
            <Box
              id='page-fade'
              display='none'
              position='absolute'
              width='100%'
              height='100%'
              backgroundColor='themed.primary'
              zIndex='1'
            />
          </Fade>
          {
            DEBUG.defaultPage ?
              DEBUG.defaultPage :
              pages[currentPage as keyof pagesNames]
          }
        </AppShell>
      </Themeing.Provider>
    </ChakraProvider>
  )
}