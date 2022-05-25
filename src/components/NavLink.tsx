import Icon from "@chakra-ui/icon"
import { Flex, FlexProps, Link, Text } from "@chakra-ui/layout"
import { IconType } from "react-icons"

interface NavLinkProps extends FlexProps {
  name: string
  icon: IconType
}

export default function NavLink({ name, icon, ...props }: NavLinkProps) {
  return (
    <Link
      onClick={() => { console.log("hi") }}
      style={{ textDecoration: 'none' }}
    >
      <Flex
        justifyContent="center"
        align="center"
        px="4"
        py="2"
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
          transform='scale(-1,1)'
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