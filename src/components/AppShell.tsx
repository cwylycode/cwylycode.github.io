import { ReactNode } from 'react'
import {
  Box,
  useDisclosure,
} from '@chakra-ui/react'

import Navbar from './Navbar'
import NavMenu from './NavMenu'
import ThemeButtons from './ThemeButtons'
import HomeLogo from './HomeLogo'
import ParticlesNav from './ParticlesNav'

const PAGE_MARGIN: number = 52
const NAVBAR_HEIGHT: number = 20

interface AppShellProps {
  theme: string
  changeTheme: (t: string) => void
  changePage: (p: string, delay: number) => void
  children: ReactNode
}

export default function AppShell({ theme, changeTheme, changePage, children }: AppShellProps) {
  const { isOpen, onToggle } = useDisclosure()

  function onLinkClick(pageName: string) {
    if (isOpen) {
      onToggle()
      changePage(pageName, 1)
      return
    }
    changePage(pageName, 0)
  }

  return (
    <Box id='app' minH="100vh">

      <Navbar
        logo={
          <HomeLogo
            onClick={() => { onLinkClick('home') }}
            height='75%'
          />
        }
        navOpen={isOpen}
        navToggle={onToggle}
        height={{ base: NAVBAR_HEIGHT, md: '0' }}
      >
        <NavMenu
          id='menu-mobile'
          onLinkClick={onLinkClick}
          width='full'
          paddingTop='2'
          paddingBottom='5'
        >
          <ThemeButtons theme={theme} changeTheme={changeTheme} />
        </NavMenu>
      </Navbar>

      <NavMenu
        id='menu-desktop'
        particles={<ParticlesNav />}
        position='fixed'
        onLinkClick={onLinkClick}
        display={{ base: 'none', md: 'block' }}
        width={{ base: 'full', md: PAGE_MARGIN }}
        height="full"
      >
        <ThemeButtons theme={theme} changeTheme={changeTheme} />
      </NavMenu>

      <Box
        id='page'
        position='relative'
        minHeight='100vh'
        ml={{ base: 0, md: PAGE_MARGIN }}
        mt={{ base: NAVBAR_HEIGHT, md: 0 }}
      >
        {children}
      </Box>
    </Box>
  )
}