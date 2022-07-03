import {
  IconButton,
  Flex,
  Spacer,
  Box,
  BoxProps,
  useOutsideClick,
} from "@chakra-ui/react"
import { ReactNode, useRef } from "react"
import { FaHamburger } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

interface NavbarProps extends BoxProps {
  logo: ReactNode
  navOpen: boolean
  navToggle: () => void
  children: ReactNode
}
export default function Navbar({ logo, navOpen, navToggle, children, ...props }: NavbarProps) {
  const mobileCollapseRef = useRef<HTMLDivElement>(null)
  const navAnimSpeed = 0.5

  useOutsideClick({
    ref: mobileCollapseRef,
    handler: () => { navOpen ? navToggle() : null }
  })

  return (
    <Box
      id='nav-mobile'
      display={{ base: 'block', md: 'none' }}
      position='fixed'
      width='100%'
      top='0'
      zIndex='9999'
      {...props}
    >
      <Box
        id='navbar-backdrop'
        display={{ base: 'block', md: 'none' }}
        position='fixed'
        width='100vw'
        height={navOpen ? '100vh' : '0vh'}
        transition={`height 0s ${navOpen ? '0s' : `${navAnimSpeed}s`}`}
        backgroundColor='blackAlpha.800'
        zIndex='-1'
      />
      <Box
        id="navbar"
        ref={mobileCollapseRef}
        height='100%'
      >
        <Flex
          backgroundColor='themed.accent1'
          px="4"
          alignItems="center"
          justifyContent="flex-start"
          height='100%'
        >
          <IconButton
            icon={navOpen ? <IoMdClose /> : <FaHamburger />}
            color='themed.secondary'
            variant="ghost"
            position='absolute'
            fontSize='48px'
            onClick={navToggle}
            aria-label="open menu"
            zIndex='1' // Makes it clickable because of spinning home logo interference
            _hover={{}}
          />
          <Spacer />
          {logo}
          <Spacer />
        </Flex>
        <Box
          height={navOpen ? '360px' : '0px'}
          overflow='hidden'
          transition={`height ${navAnimSpeed}s`}
        >
          {children}
        </Box>
      </Box>
    </Box >
  )
}