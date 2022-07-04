import { Box } from "@chakra-ui/react";

export default function NoAnimMessage() {
  return (
    <Box
      color='white'
      backgroundColor='red'
      textAlign='center'
      fontFamily='mono, monospace'
    >
      Your OS/browser is using reduced motion - animations are disabled! You're missing out!
    </Box>
  )
}