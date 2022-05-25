import { useColorModeValue } from "@chakra-ui/color-mode"
import { Box, BoxProps, Divider, Flex } from "@chakra-ui/react"

import {
  BsInfoCircle,
  BsLightning,
  BsTrophy,
  BsChatText
} from 'react-icons/bs'

import Logo from "./Logo"
import NavLink from "./NavLink"

export default function NavMenu({ ...props }: BoxProps) {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      {...props}
    >
      <Flex
        display={{ base: 'none', md: 'flex' }}
        h="20"
        alignItems="center"
        justifyContent="center"
      >
        <Logo />
      </Flex>

      <NavLink name="ABOUT" icon={BsInfoCircle} />
      <Divider
        width={{ base: '75%', md: 'auto' }}
        mx='auto'
        my={{ base: '3', md: '0' }}
      />
      <NavLink name="SKILLZ" icon={BsLightning} />
      <Divider
        width={{ base: '75%', md: 'auto' }}
        mx='auto'
        my={{ base: '3', md: '0' }}
      />
      <NavLink name="SHOWCASE" icon={BsTrophy} />
      <Divider
        width={{ base: '75%', md: 'auto' }}
        mx='auto'
        my={{ base: '3', md: '0' }}
      />
      <NavLink name="CONTACT" icon={BsChatText} />
    </Box>
  )
}