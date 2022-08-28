import { createContext, lazy, Suspense, useEffect, useState } from 'react'
import { ChakraProvider, usePrefersReducedMotion } from '@chakra-ui/react'
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

import NoAnimMessage from './components/NoAnimMessage'
import PageSpinner from './components/PageSpinner'
import ExplosionCountdown from './components/ExplosionCountdown'
import OverlayClickBlock from './components/OverlayClickBlock'
import ParticlesExplosion from './components/ParticlesExplosion'
import ExplosionAftermath from './components/ExplosionAftermath'

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

export default function App() {
  const noAnim = usePrefersReducedMotion()
  const [renderApp, setRenderApp] = useState<boolean>(true)
  const [scrollLocked, setScrollLocked] = useScrollLock()
  const [currentPage, setPage] = useState<string>(window.location.hash.slice(1) || 'home')
  const [currentTheme, setTheme] = useState<string>(SYSTEM_THEME)
  const [introActive, setIntroActive] = useState<boolean>(true)
  const [introFinished, setIntroFinished] = useState<boolean>(false)
  const [changesActive, setChangesActive] = useState<boolean>(false)
  const [animPage, setAnimPage] = useState({ active: false, page: '' })
  const [animTheme, setAnimTheme] = useState({ active: false, theme: '' })
  const [explosionActive, setExplosionActive] = useState<boolean>(false)
  const [showCountdown, setShowCountdown] = useState<boolean>(false)
  const [showAftermath, setShowAftermath] = useState<boolean>(false)
  const pageAnimSpeed = 2
  const themeAnimSpeed = 1

  useEffect(() => {
    const msg = document.getElementById('loading-text')
    if (msg) msg.remove()
    // Must be written this way for browsers that block cookies/storage, otherwise app crashes
    try { localStorage.removeItem("chakra-ui-color-mode") } catch { }
    // Page url handler
    const pageUrlHandler = () => { changePage(window.location.hash.slice(1)) }
    window.addEventListener('hashchange', pageUrlHandler)
    return () => { window.removeEventListener('hashchange', pageUrlHandler) }
  }, [])

  useEffect(() => {
    if (introActive || changesActive || explosionActive) setScrollLocked(true)
    else setScrollLocked(false)
  }, [introActive, changesActive, explosionActive])

  function handleExplode() {
    if (noAnim) {
      alert("No animations - you'll just have to imagine the site blowing up, I'm afraid.")
      return
    }
    setExplosionActive(true)
    setShowCountdown(true)
  }

  function changeTheme(theme: string) {
    if (changesActive || currentTheme === theme) return
    if (noAnim) {
      setTheme(theme)
      return
    }
    setChangesActive(true)
    setAnimTheme({ active: true, theme: theme })
  }

  function changePage(page: string) {
    if (changesActive || currentPage === page) return
    window.location.replace('#' + page)
    if (noAnim) {
      setPage(page)
      return
    }
    setChangesActive(true)
    setAnimPage({ active: true, page: page })
  }

  return (
    <ChakraProvider
      theme={themes[currentTheme as keyof themesNames]}
      resetCSS
    >
      <Themed.Provider value={currentTheme}>
        {renderApp && <>
          <AnimatePresence onExitComplete={() => setIntroFinished(true)}>
            {introActive && <OverlayIntro setIntroActive={setIntroActive} />}
          </AnimatePresence>

          {!noAnim &&
            <OverlayThemeChange
              animSpeed={themeAnimSpeed}
              active={animTheme.active}
              onAnimComplete={() => {
                if (animTheme.active) {
                  setTheme(animTheme.theme)
                  setAnimTheme({ active: false, theme: '' })
                } else setChangesActive(false)
              }}
            />
          }

          <AppShell
            theme={currentTheme}
            changeTheme={changeTheme}
            changePage={changePage}
          >
            {noAnim && <NoAnimMessage />}

            {!noAnim &&
              <OverlayPageChange
                animSpeed={pageAnimSpeed}
                active={animPage.active}
                onAnimComplete={() => {
                  if (animPage.active) {
                    window.scroll(0, 0)
                    setPage(animPage.page)
                    setAnimPage({ active: false, page: '' })
                  } else setChangesActive(false)
                }}
              />
            }

            <Suspense fallback={<PageSpinner />}>
              {introFinished && (() => {
                switch (currentPage) {
                  case 'about': return <PageAbout />
                  case 'skillz': return <PageSkillz />
                  case 'showcase': return <PageShowcase />
                  case 'contact': return <PageContact />
                  default: return <PageHome onExplodeClick={handleExplode} />
                }
              })()}
            </Suspense>
          </AppShell>
        </>}

        {showCountdown &&
          <ExplosionCountdown onCountdownFinished={() => {
            setShowCountdown(false)
            setTimeout(() => {
              console.log('Kablooie!')
              setRenderApp(false)
              setTimeout(() => {
                setShowAftermath(true)
                setExplosionActive(false)
              }, 5000);
            }, 1000);
          }} />
        }

        {showAftermath && <ExplosionAftermath />}

        {scrollLocked && <OverlayClickBlock />}

        <ParticlesExplosion show={(explosionActive && !renderApp)} />
      </Themed.Provider>
    </ChakraProvider >
  )
}