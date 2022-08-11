import { ReactNode, useState } from "react"

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

import HomeLogo from "./HomeLogo"
import NavLink from "./NavLink"
import useThemed from "../hooks/use-themed"
import SvgDoodleUmbrellaGuy from "./svg/SvgDoodleUmbrellaGuy"
import ParticlesNav from "./ParticlesNav"

interface NavMenuProps extends BoxProps {
  onLinkClick: (pageName: string) => void
  particles?: boolean
  children: ReactNode
}

export default function NavMenu({ onLinkClick, particles, children, ...props }: NavMenuProps) {
  const noAnim = usePrefersReducedMotion()
  const [mouseEntered, setMouseEntered] = useState(false)

  return (
    <Box
      zIndex='2'
      backgroundColor='themed.accent1'
      /** @ts-ignore */
      borderRightStyle={useThemed({ default: 'unset', hacker: 'dashed' })}
      borderRightWidth={{ base: '0', md: 'thin' }}
      borderColor='themed.secondary'
      {...props}
    >
      <Flex
        flexDirection='column'
        justifyContent='space-between'
        height='full'
      >
        <Flex
          position='relative'
          flexDirection='column'
          justifyContent='flex-start'
          height='auto'
          onMouseEnter={particles ? () => { setMouseEntered(true) } : undefined}
          onMouseLeave={particles ? () => { setMouseEntered(false) } : undefined}
        >

          {particles ? <ParticlesNav /> : null}

          <Spacer
            maxHeight='5'
            minHeight={{ base: '0', md: '5' }}
          />

          <HomeLogo
            onClick={() => { onLinkClick('home') }}
            display={{ base: 'none', md: 'unset' }}
            height='20'
            width='fit-content'
            marginX='auto'
            zIndex='1'
          />

          <Spacer
            maxHeight='5'
            minHeight={{ base: '0', md: '5' }}
          />

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
            minHeight='5'
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
              _hover={noAnim ? {} : {
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
              _hover={noAnim ? {} : {
                base: {}, md: {
                  transform: 'scale(1.3,1.3) rotate(360deg)'
                }
              }}
            />
          </Flex>

          <Spacer
            maxHeight='5'
            minHeight='5'
          />

          <SvgDoodleUmbrellaGuy
            isRaining={mouseEntered}
            display={{ base: 'none', md: 'unset' }}
            width='32'
            marginX='auto'
          />

          <Divider
            display={{ base: 'none', md: 'unset' }}
            mx='auto'
          />

        </Flex>

        <Spacer minHeight={{ base: '5', md: 'unset' }} />

        <Divider
          display={{ base: 'none', md: 'unset' }}
          mx='auto'
        />

        {children}
      </Flex>
    </Box>
  )
}