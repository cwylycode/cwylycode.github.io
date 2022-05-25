import { ReactNode, useRef } from 'react'
import {
  Box,
  useColorModeValue,
  useDisclosure,
  Collapse,
  useOutsideClick,
  Fade,
} from '@chakra-ui/react'

import Navbar from './Navbar'
import NavMenu from './NavMenu'

const PAGE_MARGIN: number = 52
const NAVBAR_HEIGHT: number = 20

export default function AppShell({ children }: { children: ReactNode }) {

  const { isOpen, onToggle } = useDisclosure()
  const mobileCollapseRef = useRef<HTMLDivElement>(null)

  useOutsideClick({
    ref: mobileCollapseRef,
    handler: () => { isOpen ? onToggle() : null }
  })

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <Fade in={isOpen}>
        <Box
          display={{ base: 'unset', md: 'none' }}
          position='fixed'
          width='100vw'
          height='100vh'
          backgroundColor='blackAlpha.800'
        />
      </Fade>

      <Box
        ref={mobileCollapseRef}
        position='sticky'
        top='0'>
        <Navbar
          onOpen={onToggle}
          display={{ base: 'flex', md: 'none' }}
          height={NAVBAR_HEIGHT}
        />
        <Collapse in={isOpen}>
          <NavMenu
            position='fixed'
            top={NAVBAR_HEIGHT}
            display={{ base: 'block', md: 'none' }}
            width='full'
            paddingTop='2'
            paddingBottom='5'
          />
        </Collapse>
      </Box>

      <NavMenu
        position='fixed'
        display={{ base: 'none', md: 'block' }}
        width={{ base: 'full', md: PAGE_MARGIN }}
        height="full"
      />

      <Box ml={{ base: 0, md: PAGE_MARGIN }} p="4">
        {children}
      </Box>
    </Box>
  )
}