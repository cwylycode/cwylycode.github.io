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

import HomeLogo from "./HomeLogo"
import NavLink from "./NavLink"
import useThemed from "../hooks/use-themed"
import { SvgDoodleUmbrellaGuy1 } from "./svg/SvgDoodleUmbrellaGuy"

interface NavMenuProps extends BoxProps {
  onLinkClick: (pageName: string) => void
  particles?: ReactNode
  children: ReactNode
}

export default function NavMenu({ onLinkClick, particles, children, ...props }: NavMenuProps) {
  return (
    <Box
      zIndex='2'
      backgroundColor='themed.accent1'
      /** @ts-ignore */
      borderRightStyle={useThemed({ default: 'unset', hacker: 'dashed' })}
      borderRightWidth={{ base: '0', md: 'thin' }}
      borderColor='themed.secondary'
      onMouseEnter={particles ? () => { console.log('now inside') } : undefined}
      onMouseLeave={particles ? () => { console.log('now outside') } : undefined}
      {...props}
    >
      {particles}
      <Flex
        flexDirection='column'
        justifyContent='flex-start'
        height='full'
      >

        <Spacer maxHeight='5' />
        <HomeLogo
          onClick={() => { onLinkClick('home') }}
          display={{ base: 'none', md: 'unset' }}
          height='20'
          cursor='pointer'
          width='fit-content'
          margin='auto'
        />
        <Spacer maxHeight='5' />

        <Flex flexDirection='column'>
          <NavLink
            name="ABOUT"
            icon={BsInfoCircle}
            onClick={() => { onLinkClick('about') }}
          />
          <Divider
            width={{ base: '75%', md: 'full' }}
            mx='auto'
            my={{ base: '1', md: '0' }}
          />
          <NavLink
            name="SKILLZ"
            icon={BsLightning}
            onClick={() => { onLinkClick('skillz') }}
          />
          <Divider
            width={{ base: '75%', md: 'full' }}
            mx='auto'
            my={{ base: '1', md: '0' }}
          />
          <NavLink
            name="SHOWCASE"
            icon={BsTrophy}
            onClick={() => { onLinkClick('showcase') }}
          />
          <Divider
            width={{ base: '75%', md: 'full' }}
            mx='auto'
            my={{ base: '1', md: '0' }}
          />
          <NavLink
            name="CONTACT"
            icon={BsChatText}
            onClick={() => { onLinkClick('contact') }}
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
            _hover={{
              base: {}, md: {
                transform: 'scale(1.3,1.3) rotate(360deg)'
              }
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
            _hover={{
              base: {}, md: {
                transform: 'scale(1.3,1.3) rotate(360deg)'
              }
            }}
          />
        </Flex>

        <Spacer minHeight={{ base: '5', md: 'unset' }} />

        <SvgDoodleUmbrellaGuy1
          display={{ base: 'none', md: 'unset' }}
          width='32'
          marginX='auto'
        />

        <Divider
          display={{ base: 'none', md: 'unset' }}
          mx='auto'
        />
        {children}
      </Flex>
    </Box>
  )
}