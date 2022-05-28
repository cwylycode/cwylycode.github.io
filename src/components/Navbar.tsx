import {
  IconButton,
  Flex,
  FlexProps,
  Box,
} from "@chakra-ui/react"
import { FaHamburger } from 'react-icons/fa'
import Logo from "./Logo"

interface NavbarProps extends FlexProps {
  onOpen: () => void
}
export default function Navbar({ onOpen, ...props }: NavbarProps) {
  return (
    <>
      <Flex
        px="4"
        alignItems="center"
        justifyContent="flex-start"
        {...props}
      >
        <IconButton
          color='themed.secondary'
          variant="ghost"
          position='absolute'
          fontSize='32px'
          onClick={onOpen}
          aria-label="open menu"
          icon={<FaHamburger />}
        />
        <Box margin='auto'>
          <Logo />
        </Box>
      </Flex>
    </>
  )
}