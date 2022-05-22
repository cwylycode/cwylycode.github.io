import { CloseButton } from "@chakra-ui/close-button"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { Box, BoxProps, Flex } from "@chakra-ui/layout"

import {
  BsInfoCircle,
  BsLightning,
  BsTrophy,
  BsChatText
} from 'react-icons/bs'

import Logo from "./Logo"
import NavLink from "./NavLink"

interface NavMenuProps extends BoxProps {
  onClose: () => void
  marginFactor: number | string
}

export default function NavMenu({ onClose, marginFactor, ...props }: NavMenuProps) {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      w={{ base: 'full', md: marginFactor }}
      pos="fixed"
      h="full"
      {...props}
    >
      <Flex h="20" alignItems="center" justifyContent="center">
        <Logo />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <NavLink name="ABOUT" icon={BsInfoCircle} />
      <NavLink name="SKILLZ" icon={BsLightning} />
      <NavLink name="SHOWCASE" icon={BsTrophy} />
      <NavLink name="CONTACT" icon={BsChatText} />
    </Box>
  )
}