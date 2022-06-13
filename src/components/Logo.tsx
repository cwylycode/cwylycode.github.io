import { BoxProps, Text } from "@chakra-ui/layout";

export default function Logo({ ...props }: BoxProps) {
  return (
    <Text fontSize="2xl" fontWeight="bold" {...props}>
      Logo
    </Text>
  )
}