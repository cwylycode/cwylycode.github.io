import { createContext, lazy, useEffect, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { useScrollLock } from '@mantine/hooks'
import { AnimatePresence } from 'framer-motion'

import AppShell from './components/AppShell'

import { themeLight } from './themes/light'
import { themeDark } from './themes/dark'
import { themeHacker } from './themes/hacker'
import { themeRandom } from './themes/random'

import OverlayPageChange from './components/OverlayPageChange'
import OverlayThemeChange from './components/OverlayThemeChange'
import OverlayIntro from './components/OverlayIntro'

import PageHome from './pages/PageHome'
import PageAbout from './pages/PageAbout'
import PageSkillz from './pages/PageSkillz'
import PageShowcase from './pages/PageShowcase'
import PageContact from './pages/PageContact'

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

// const PageHome = lazy(() => import('./pages/PageHome'))
// const PageAbout = lazy(() => import('./pages/PageAbout'))
// const PageSkillz = lazy(() => import('./pages/PageSkillz'))
// const PageShowcase = lazy(() => import('./pages/PageShowcase'))
// const PageContact = lazy(() => import('./pages/PageContact'))

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
  const [scrollLocked, setScrollLocked] = useScrollLock()
  const [introActive, setIntroActive] = useState<boolean>(true) // Change to enable/disable intro
  const [currentPage, setPage] = useState<string>('')
  const [currentTheme, setTheme] = useState<string>(SYSTEM_THEME)
  const [canChangePage, setCanChangePage] = useState<boolean>(true)
  const [canChangeTheme, setCanChangeTheme] = useState<boolean>(true)
  const [animPageActive, setAnimPageActive] = useState<boolean>(false)
  const [animThemeActive, setAnimThemeActive] = useState<boolean>(false)
  const pageAnimSpeed = 1
  const themeAnimSpeed = 1

  useEffect(() => {
    localStorage.removeItem("chakra-ui-color-mode")
    document.getElementById('loading-text')?.remove()
  }, [])

  useEffect(() => {
    if (!introActive) changePage('home', 0)
  }, [introActive])

  useEffect(() => {
    if (canChangePage && canChangeTheme && !introActive) {
      setScrollLocked(false)
    } else {
      setScrollLocked(true)
    }
  }, [canChangePage, canChangeTheme, introActive])

  function changeTheme(theme: string) {
    if (!canChangeTheme || currentTheme === theme) return
    setCanChangeTheme(false)
    setAnimThemeActive(true)
    setTimeout(() => {
      setTheme(theme)
      setAnimThemeActive(false)
      setCanChangeTheme(true)
    }, 1000 * (themeAnimSpeed + 0.5));
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
      }, 1000 * (pageAnimSpeed + 0.5))
    }, delay * 1000);
  }

  return (
    <ChakraProvider
      theme={themes[currentTheme as keyof themesNames]}
      resetCSS
    >
      <Themed.Provider value={currentTheme}>
        <AnimatePresence>
          {introActive && <OverlayIntro setIntroActive={setIntroActive} />}
        </AnimatePresence>
        <OverlayThemeChange
          active={animThemeActive}
          animSpeed={themeAnimSpeed}
        />
        <AppShell
          theme={currentTheme}
          changeTheme={changeTheme}
          changePage={changePage}
        >
          <OverlayPageChange active={animPageActive} animSpeed={pageAnimSpeed} />
          {currentPage ? pages[currentPage as keyof pagesNames] : null}
        </AppShell>
      </Themed.Provider>
    </ChakraProvider >
  )
}