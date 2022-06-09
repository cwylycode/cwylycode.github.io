import { ReactNode, useRef } from 'react'
import {
  Box,
  useDisclosure,
  Collapse,
  useOutsideClick,
  Fade,
} from '@chakra-ui/react'

import Navbar from './Navbar'
import NavMenu from './NavMenu'
import ThemeButtons from './ThemeButtons'

const PAGE_MARGIN: number = 52
const NAVBAR_HEIGHT: number = 20

interface AppShellProps {
  theme: string
  changeTheme(t: string): any
  changePage(p: string): any
  children: ReactNode
}

export default function AppShell({ theme, changeTheme, changePage, children }: AppShellProps) {

  const { isOpen, onToggle } = useDisclosure()
  const mobileCollapseRef = useRef<HTMLDivElement>(null)

  useOutsideClick({
    ref: mobileCollapseRef,
    handler: () => { isOpen ? onToggle() : null }
  })

  return (
    <Box id='app' minH="100vh">
      <Fade in={isOpen}>
        <Box
          display={{ base: 'unset', md: 'none' }}
          position='fixed'
          width='100vw'
          height='100vh'
          backgroundColor='blackAlpha.800'
          zIndex='1'
        />
      </Fade>

      <Box
        id='nav-mobile'
        ref={mobileCollapseRef}
        position='sticky'
        top='0'
        zIndex='1'
      >
        <Navbar
          backgroundColor='themed.accent1'
          isOpen={isOpen}
          onOpen={onToggle}
          display={{ base: 'flex', md: 'none' }}
          height={NAVBAR_HEIGHT}
        />
        <Collapse in={isOpen}>
          <NavMenu
            changePage={changePage}
            position='fixed'
            top={NAVBAR_HEIGHT}
            display={{ base: 'block', md: 'none' }}
            width='full'
            paddingTop='2'
            paddingBottom='5'
          >
            <ThemeButtons theme={theme} changeTheme={changeTheme} />
          </NavMenu>
        </Collapse>
      </Box>

      <NavMenu
        changePage={changePage}
        position='fixed'
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
      >
        {children}
      </Box>
    </Box>
  )
}