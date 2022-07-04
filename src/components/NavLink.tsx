import {
  Flex,
  Icon,
  Text,
  BoxProps,
  Box,
  usePrefersReducedMotion,
} from "@chakra-ui/react"
import { IconType } from "react-icons"
import useThemed from "../hooks/use-themed"

interface NavLinkProps extends BoxProps {
  name: string
  icon: IconType
}

export default function NavLink({ name, icon, ...props }: NavLinkProps) {
  const noAnim = usePrefersReducedMotion()
  return (
    <Box
      position='relative'
      _before={{
        content: '""',
        position: 'absolute',
        top: '0; right: 0; bottom: 0; left: 0',
        transform: 'scaleX(0)',
        transition: 'transform 0.3s ease-out',
        zIndex: 0,
        bgColor: 'themed.scheme'
      }}
      _hover={noAnim ? {} : {
        base: {}, md: {
          color: 'white',
          _before: {
            transform: 'scaleX(1)'
          }
        }
      }}
      {...props}
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
      >
        <Icon
          as={icon}
          mr="4"
          fontSize="16"
          transition='transform 1s ease-out'
          _groupHover={noAnim ? {} : {
            base: {}, md: {
              transform: 'rotateY(3.5turn)'
            }
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
          _groupHover={noAnim ? {} : {
            base: {}, md: {
              transform: 'rotateY(-3turn)'
            }
          }}
        />
      </Flex>
    </Box>
  )
}