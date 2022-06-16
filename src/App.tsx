import { createContext, useEffect, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

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

import OverlayPageChange from './components/OverlayPageChange'

const SYSTEM_THEME = (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) ? 'dark' : 'light'

export const Themed = createContext<string>(SYSTEM_THEME)

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
  const [canChangePage, setCanChangePage] = useState<boolean>(true)
  const [animPageActive, setAnimPageActive] = useState<boolean>(false)
  const pageAnimSpeed = 0.5

  useEffect(() => {
    localStorage.removeItem("chakra-ui-color-mode")
  }, [])

  function changeTheme(t: string) {
    setTheme(t)
  }

  function changePage(page: string, delay: number) {
    if (!canChangePage || currentPage === page) return
    setCanChangePage(false)
    setTimeout(() => {
      setAnimPageActive(true)
      setTimeout(() => {
        setPage(page)
        setCanChangePage(true)
        setAnimPageActive(false)
      }, 1000 * (pageAnimSpeed + 0.5));
    }, delay * 1000);
  }

  return (
    <ChakraProvider
      theme={themes[currentTheme as keyof themesNames]}
      resetCSS
    >
      <Themed.Provider value={currentTheme}>
        <AppShell
          theme={currentTheme}
          changeTheme={changeTheme}
          changePage={changePage}
        >
          <>
            <OverlayPageChange active={animPageActive} animSpeed={pageAnimSpeed} />
            {pages[currentPage as keyof pagesNames]}
          </>
        </AppShell>
      </Themed.Provider>
    </ChakraProvider >
  )
}