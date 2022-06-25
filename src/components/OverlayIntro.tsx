import { Box, Button, Container, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

const quotes: Array<string> = [
  'In Soviet Russia, "In Soviet Russia Joke" makes you!',
  '<insert witty phrase here>',
  'A penny saved is a penny made worthless by inflation.',
  'Congratulations on making it this far!',
  'These loading screens are actually pointless, by the way.',
  'How did you even find this place? Who sent you?',
  'Coding is an art, a science, and mostly dark magic.',
  'This website was coded with absolutely ZERO coffee intake.',
  'Goodnight. Sleep tight. Don\'t let the code bugs byte.',
  'If at first you don\'t succeed, recompile and pray.'
]

interface OverlayIntroProps {
  setIntroActive: Dispatch<SetStateAction<boolean>>
}

export default function OverlayIntro({ setIntroActive }: OverlayIntroProps) {
  return (
    <Box
      as={motion.div}
      exit={{ y: ['0vh', '20vh', '-100vh'], transition: { duration: 1, ease: 'easeOut' } }}
      position='fixed'
      top='-20vh'
      zIndex='10000'
      width='100vw'
      height='120vh'
      backgroundColor='green'
    >
      <Stack
        id="intro-overlay"
        height='100%'
        justifyContent='center'
        alignItems='center'
      >
        <Container centerContent>
          <Button onClick={() => { setIntroActive(false) }}>Close</Button>
          {/* path animated svg icon , quotes, etc*/}
        </Container>
      </Stack>
    </Box>
  )
}