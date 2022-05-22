import { ReactNode } from 'react'
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react'

import Navbar from './Navbar'
import NavMenu from './NavMenu'

const PAGE_MARGIN: number = 52

export default function AppShell({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <NavMenu
        onClose={() => onClose}
        marginFactor={PAGE_MARGIN}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <NavMenu
            onClose={onClose}
            marginFactor={PAGE_MARGIN}
          />
        </DrawerContent>
      </Drawer>
      <Navbar
        onOpen={onOpen}
        display={{ base: 'flex', md: 'none' }}
      />
      <Box ml={{ base: 0, md: PAGE_MARGIN }} p="4">
        {children}
      </Box>
    </Box>
  )
}