import Icon from "@chakra-ui/icon"
import { Flex, FlexProps, Link, Text } from "@chakra-ui/layout"
import { IconType } from "react-icons"

interface NavLinkProps extends FlexProps {
  name: string
  icon: IconType
}

export default function NavLink({ name, icon, ...props }: NavLinkProps) {
  return (
    // Change to buttons
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        justifyContent="center"
        align="center"
        px="4"
        py="2"
        borderBottom='1px'
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...props}
      >
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: 'white',
          }}
          as={icon}
        />
        <Text>{name}</Text>
        <Icon
          ml="4"
          fontSize="16"
          _groupHover={{
            color: 'white',
          }}
          as={icon}
        />
      </Flex>
    </Link>
  )
}