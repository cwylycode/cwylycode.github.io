import { Box } from "@chakra-ui/react";

export default function NoAnimMessage() {
  return (
    <Box
      color='white'
      backgroundColor='red'
      textAlign='center'
      fontFamily='mono, monospace'
    >
      Your OS/browser is set to use reduced motion - animations are disabled! You're missing out!
    </Box>
  )
}