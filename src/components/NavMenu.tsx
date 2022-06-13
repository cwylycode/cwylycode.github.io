import { ReactNode } from "react"

import {
  Box,
  BoxProps,
  Divider,
  Flex,
  IconButton,
  Spacer,
} from "@chakra-ui/react"

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
import useThemed from "../hooks/use-themed"
import useIsMobile from "../hooks/use-is-mobile"

interface NavMenuProps extends BoxProps {
  changePage(p: string): any
  navOpen?: boolean
  navToggle?(): any
  children: ReactNode
}

export default function NavMenu({ changePage, navOpen, navToggle, children, ...props }: NavMenuProps) {
  const isMobile = useIsMobile()
  return (
    <Box
      backgroundColor='themed.accent1'
      /** @ts-ignore */
      borderRightStyle={useThemed({ default: 'unset', hacker: 'dashed' })}
      borderRightWidth={{ base: '0', md: 'thin' }}
      borderColor='themed.secondary'
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
          <NavLink
            name="ABOUT"
            icon={BsInfoCircle}
            changePage={changePage}
            navOpen={navOpen}
            navToggle={navToggle}
          />
          <Divider
            width={{ base: '75%', md: 'full' }}
            mx='auto'
            my={{ base: '1', md: '0' }}
          />
          <NavLink
            name="SKILLZ"
            icon={BsLightning}
            changePage={changePage}
            navOpen={navOpen}
            navToggle={navToggle}
          />
          <Divider
            width={{ base: '75%', md: 'full' }}
            mx='auto'
            my={{ base: '1', md: '0' }}
          />
          <NavLink
            name="SHOWCASE"
            icon={BsTrophy}
            changePage={changePage}
            navOpen={navOpen}
            navToggle={navToggle}
          />
          <Divider
            width={{ base: '75%', md: 'full' }}
            mx='auto'
            my={{ base: '1', md: '0' }}
          />
          <NavLink
            name="CONTACT"
            icon={BsChatText}
            changePage={changePage}
            navOpen={navOpen}
            navToggle={navToggle}
          />
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
            transition='transform 0.5s'
            _hover={isMobile ? {} : {
              transform: 'scale(1.3,1.3) rotate(360deg)'
            }}
          />
          <IconButton
            aria-label="linked in"
            icon={<BsLinkedin />}
            as='a'
            href="#"
            variant='ghost'
            fontSize='24px'
            color='themed.secondary'
            transition='transform 0.5s'
            _hover={isMobile ? {} : {
              transform: 'scale(1.3,1.3) rotate(360deg)'
            }}
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