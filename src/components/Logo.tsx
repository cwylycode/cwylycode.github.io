import { BoxProps, Text } from "@chakra-ui/layout";

interface LogoProps extends BoxProps {

}

export default function Logo({ ...props }: LogoProps) {
  return (
    <Text fontSize="2xl" fontWeight="bold" {...props}>
      Logo
    </Text>
  )
}