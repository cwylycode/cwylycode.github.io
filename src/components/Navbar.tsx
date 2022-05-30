import {
  IconButton,
  Flex,
  FlexProps,
  Spacer,
} from "@chakra-ui/react"
import { FaHamburger } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import Logo from "./Logo"

interface NavbarProps extends FlexProps {
  isOpen: boolean
  onOpen: () => void
}
export default function Navbar({ isOpen, onOpen, ...props }: NavbarProps) {
  return (
    <Flex
      px="4"
      alignItems="center"
      justifyContent="flex-start"
      {...props}
    >
      <IconButton
        icon={isOpen ? <IoMdClose /> : <FaHamburger />}
        color='themed.secondary'
        variant="ghost"
        position='absolute'
        fontSize='32px'
        onClick={onOpen}
        aria-label="open menu"
      />
      <Spacer />
      <Logo />
      <Spacer />
    </Flex>
  )
}