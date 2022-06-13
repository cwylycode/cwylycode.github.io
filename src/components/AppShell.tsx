import { ReactNode, useRef } from 'react'
import {
  Box,
  useDisclosure,
  useOutsideClick,
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
      <Box
        id='nav-backdrop'
        display={{ base: 'block', md: 'none' }}
        position='fixed'
        width='100vw'
        height={isOpen ? '100vh' : '0vh'}
        transition={`height 0s ${isOpen ? '0s' : '0.5s'}`}
        backgroundColor='blackAlpha.800'
        zIndex='9998'
      />
      <Box
        id='nav-mobile'
        display={{ base: 'block', md: 'none' }}
        ref={mobileCollapseRef}
        position='fixed'
        width='100%'
        top='0'
        zIndex='9999'
      >
        <Navbar
          navOpen={isOpen}
          navToggle={onToggle}
          height={NAVBAR_HEIGHT}
        />
        <Box
          height={isOpen ? '400px' : '0px'}
          overflow='hidden'
          transition='height 0.5s'
        >
          <NavMenu
            id='menu-mobile'
            changePage={changePage}
            navOpen={isOpen}
            navToggle={onToggle}
            width='full'
            paddingTop='2'
            paddingBottom='5'
          >
            <ThemeButtons theme={theme} changeTheme={changeTheme} />
          </NavMenu>
        </Box>
      </Box>

      <NavMenu
        id='menu-desktop'
        position='fixed'
        changePage={changePage}
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