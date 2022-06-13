import {
  Flex,
  FlexProps,
  Link,
  Icon,
  Text,
} from "@chakra-ui/react"
import { IconType } from "react-icons"
import useIsMobile from "../hooks/use-is-mobile"
import useThemed from "../hooks/use-themed"

interface NavLinkProps extends FlexProps {
  name: string
  icon: IconType
  changePage(t: string): any
  navOpen?: boolean
  navToggle?(): any
}

export default function NavLink({ name, icon, changePage, navOpen, navToggle, ...props }: NavLinkProps) {
  const isMobile = useIsMobile()
  return (
    <Link
      onClick={() => {
        if (navToggle) {
          if (!navOpen) return
          navToggle()
        }
        changePage(name.toLowerCase())
      }}
      textDecoration='none'
      position='relative'
      _before={{
        content: '""',
        position: 'absolute',
        inset: '0 0 0 0',
        transform: 'scaleX(0)',
        transition: 'transform 0.3s ease-out',
        zIndex: 0,
        bgColor: 'themed.scheme'
      }}
      _hover={isMobile ? {} : {
        color: 'white',
        _before: {
          transform: 'scaleX(1)'
        }

      }}
    >
      <Flex
        position='relative'
        zIndex='1'
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
          transition='transform 1s ease-out'
          _groupHover={isMobile ? {} : {
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
          transform={'rotateY(180deg)'}
          transition='transform 1s ease-out'
          _groupHover={isMobile ? {} : {
            transform: 'rotateY(-3turn)'
          }}
        />
      </Flex>
    </Link>
  )
}