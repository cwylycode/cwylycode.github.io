import { createContext, lazy, Suspense, useEffect, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import AppShell from './components/AppShell'

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

const PageHome = lazy(() => import('./pages/PageHome'))
const PageAbout = lazy(() => import('./pages/PageAbout'))
const PageSkillz = lazy(() => import('./pages/PageSkillz'))
const PageShowcase = lazy(() => import('./pages/PageShowcase'))
const PageContact = lazy(() => import('./pages/PageContact'))

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
      }, 1000 * (pageAnimSpeed + 0.5))
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
          <Suspense fallback={<p>loading...</p>}>
            <OverlayPageChange active={animPageActive} animSpeed={pageAnimSpeed} />
            {pages[currentPage as keyof pagesNames]}
          </Suspense>
        </AppShell>
      </Themed.Provider>
    </ChakraProvider >
  )
}