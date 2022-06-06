import { ReactNode } from "react"

import {
  Box,
  BoxProps,
  Divider,
  Flex,
  IconButton,
  Spacer,
  usePrefersReducedMotion,
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

interface NavMenuProps extends BoxProps {
  children: ReactNode
}

export default function NavMenu({ children, ...props }: NavMenuProps) {

  const noAnim = usePrefersReducedMotion()

  return (
    <Box
      id="nav-menu"
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
            _hover={{
              transform: noAnim ? 'unset' : 'scale(1.3,1.3)'
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
            _hover={{
              transform: noAnim ? 'unset' : 'scale(1.3,1.3)'
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