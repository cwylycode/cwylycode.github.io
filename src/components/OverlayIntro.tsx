import { Container, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import SvgIntro from "./svg/SvgIntro";

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
    <Flex
      id="intro-overlay"
      as={motion.div}
      exit={{ y: ['0vh', '20vh', '-100vh'], transition: { duration: 1, ease: 'easeOut' } }}
      position='fixed'
      flexDirection='column'
      justifyContent='center'
      top='-20vh'
      paddingTop='20vh'
      zIndex='10000'
      width='100vw'
      height='120vh'
      backgroundColor='themed.primary'
    >
      <Container centerContent>
        {/* path animated svg icon , quotes, etc*/}
        <SvgIntro
          width={{ base: '32', md: '64', lg: '72' }}
          onAnimEnd={() => { setIntroActive(false) }}
        />
        <Text
          as={motion.p}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1 } }}
          textAlign='center'
          marginTop='20'
          fontSize={{ base: 'lg', md: '2xl', lg: '4xl' }}
        >
          {quotes[Math.floor(Math.random() * quotes.length)]}
        </Text>
      </Container>
    </Flex>
  )
}