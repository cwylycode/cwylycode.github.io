import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

import Navbar from './Navbar'
import NavMenu from './NavMenu'
import ThemeButtons from './ThemeButtons'

const PAGE_MARGIN: number = 52
const NAVBAR_HEIGHT: number = 20

interface AppShellProps {
  theme: string
  changeTheme: (t: string) => void
  changePage: (p: string) => void
  children: ReactNode
}

export default function AppShell({ theme, changeTheme, changePage, children }: AppShellProps) {
  return (
    <Box id='app' minH="100vh">
      <Navbar
        theme={theme}
        changeTheme={changeTheme}
        changePage={changePage}
        height={{ base: NAVBAR_HEIGHT, md: '0' }}
      />

      <NavMenu
        id='menu-desktop'
        particles
        position='fixed'
        onLinkClick={changePage}
        display={{ base: 'none', md: 'block' }}
        width={{ base: 'full', md: PAGE_MARGIN }}
        height="full"
        overflowY='auto'
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