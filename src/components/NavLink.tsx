import {
  Flex,
  FlexProps,
  Link,
  Icon,
  Text,
  usePrefersReducedMotion,
} from "@chakra-ui/react"
import { IconType } from "react-icons"
import useThemed from "../hooks/use-themed"

interface NavLinkProps extends FlexProps {
  name: string
  icon: IconType
}

export default function NavLink({ name, icon, ...props }: NavLinkProps) {

  const noAnim = usePrefersReducedMotion()

  return (
    <Link
      onClick={() => { alert("hi link") }}
      textDecoration='none'
      position='relative'
      _before={{
        content: '""',
        position: 'absolute',
        inset: '0 0 0 0',
        transform: 'scaleX(0)',
        transition: 'transform 0.3s ease-out',
        zIndex: -1,
        bgColor: useThemed({
          default: 'themed.scheme',
          hacker: 'maroon',
        })
      }}
      _hover={{
        color: 'white',
        _before: {
          transform: 'scaleX(1)'
        }

      }}
    >
      <Flex
        justifyContent="center"
        align="center"
        px="4"
        py="2"
        role="group"
        cursor="pointer"
        {...props}
      >
        <Icon
          as={icon}
          mr="4"
          fontSize="16"
          transition={noAnim ? undefined : 'transform 1s ease-out'}
          _groupHover={{
            transform: 'rotateY(3.5turn)'
          }}
        />
        <Text
          fontFamily={`${useThemed({ default: 'inherit', hacker: 'heading' })}`}
          fontWeight={`${useThemed({ default: 'inherit', hacker: 'bold' })}`}
        >
          {name}
        </Text>
        <Icon
          as={icon}
          ml="4"
          fontSize="16"
          transform='rotateY(180deg)'
          transition={noAnim ? undefined : 'transform 1s ease-out'}
          _groupHover={{
            transform: 'rotateY(-3turn)'
          }}
        />
      </Flex>
    </Link>
  )
}