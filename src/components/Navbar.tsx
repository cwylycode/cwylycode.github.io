import {
  IconButton,
  Flex,
  FlexProps,
  Spacer,
} from "@chakra-ui/react"
import { FaHamburger } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import useIsMobile from "../hooks/use-is-mobile"
import Logo from "./Logo"

interface NavbarProps extends FlexProps {
  navOpen: boolean
  navToggle: () => void
}
export default function Navbar({ navOpen, navToggle, ...props }: NavbarProps) {
  return (
    <Flex
      id="navbar"
      backgroundColor='themed.accent1'
      px="4"
      alignItems="center"
      justifyContent="flex-start"
      {...props}
    >
      <IconButton
        icon={navOpen ? <IoMdClose /> : <FaHamburger />}
        color='themed.secondary'
        variant="ghost"
        position='absolute'
        fontSize='32px'
        onClick={navToggle}
        aria-label="open menu"
        _hover={useIsMobile() ? {} : {
          background: 'gray.500'
        }}
      />
      <Spacer />
      <Logo />
      <Spacer />
    </Flex>
  )
}