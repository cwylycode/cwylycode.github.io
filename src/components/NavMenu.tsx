import {
  Box,
  BoxProps,
  Divider,
  Flex,
  IconButton,
  Spacer,
} from "@chakra-ui/react"
import { ReactNode } from "react"

import {
  BsInfoCircle,
  BsLightning,
  BsTrophy,
  BsChatText,
  BsGithub,
  BsLinkedin,
} from 'react-icons/bs'

import Logo from "./Logo"
import NavLink from "./NavLink"

interface NavMenuProps extends BoxProps {
  children: ReactNode
}

export default function NavMenu({ children, ...props }: NavMenuProps) {
  return (
    <Box
      backgroundColor='themed.accent1'
      {...props}
    >
      <Flex
        flexDirection='column'
        justifyContent='flex-start'
        height='full'
      >
        <Flex
          display={{ base: 'none', md: 'flex' }}
          h="20"
          alignItems="center"
          justifyContent="center"
        >
          <Logo />
        </Flex>

        <Spacer
          maxHeight='5'
          minHeight={{ base: '5', md: '0' }}
        />

        <Flex flexDirection='column'>
          <NavLink name="ABOUT" icon={BsInfoCircle} />
          <Divider
            width={{ base: '75%', md: 'full' }}
            mx='auto'
            my={{ base: '1', md: '0' }}
          />
          <NavLink name="SKILLZ" icon={BsLightning} />
          <Divider
            width={{ base: '75%', md: 'full' }}
            mx='auto'
            my={{ base: '1', md: '0' }}
          />
          <NavLink name="SHOWCASE" icon={BsTrophy} />
          <Divider
            width={{ base: '75%', md: 'full' }}
            mx='auto'
            my={{ base: '1', md: '0' }}
          />
          <NavLink name="CONTACT" icon={BsChatText} />
        </Flex>

        <Spacer
          maxHeight='5'
          minHeight={{ base: '5', md: '0' }}
        />

        <Flex justifyContent='center'>
          <IconButton
            aria-label="github"
            icon={<BsGithub />}
            as='a'
            href="https://github.com/cwylycode"
            variant='ghost'
            fontSize='24px'
            color='themed.secondary'
          />
          <IconButton
            aria-label="linked in"
            icon={<BsLinkedin />}
            as='a'
            href="#"
            variant='ghost'
            fontSize='24px'
            color='themed.secondary'
          />
        </Flex>

        <Spacer />

        <Divider
          display={{ base: 'none', md: 'unset' }}
          mx='auto'
        />

        {children}
      </Flex>
    </Box>
  )
}