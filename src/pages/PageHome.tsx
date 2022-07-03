import {
  Box,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import useThemed from '../hooks/use-themed';

import { useScrollIntoView } from '@mantine/hooks';

import BigButton from '../svg/big_button.svg'
import SvgDoodleLookie from '../components/svg/SvgDoodleLookie';
import ParticlesHomePage from '../components/ParticlesHomePage';

export default function PageHome() {
  const { scrollIntoView: scrollToExplode, targetRef: explodeSection } = useScrollIntoView<HTMLDivElement>()
  const showParticles = useBreakpointValue({ base: false, md: true })

  return (
    <>
      {showParticles ? <ParticlesHomePage /> : null}
      <Container paddingTop={{ base: '10', md: '24' }}>
        <Stack spacing='12' direction='column' textAlign='center'>
          <Text fontSize={{ md: 'large', lg: 'xl' }} textAlign={{ md: 'left' }}>
            The name's Wyly ...
          </Text>

          <Box textAlign='center'>
            <Heading color='themed.accent3' fontSize={{ base: '5xl', md: '7xl', lg: '8xl' }}>
              Colin Wyly
            </Heading>
            <Box
              minHeight='1'
              marginTop='2'
              marginBottom='2'
              marginX='auto'
              maxWidth='75%'
              bgGradient='linear(90deg, themed.scheme 0%, themed.secondary 50%, themed.scheme 100%)'
            />
            <Text fontSize={{ base: 'md', md: 'lg', lg: '2xl' }}>
              Coder I Developer I Tech Guy
            </Text>
            <Text marginTop='12' fontSize={{ base: '8px', md: '10px', lg: '12px' }} fontWeight='normal' fontFamily='body'>
              (It's pronounced 'why-lee' 😛)
            </Text>
          </Box>

          <Text textAlign={{ md: 'left' }}>
            Thanks for stopping by! You can find out more about me and my work by visiting the many links peppered all over this site.
          </Text>

          <SvgDoodleLookie
            width={{ base: '48', md: '64' }}
            marginLeft='auto !important'
            marginRight={{ base: 'auto !important', md: 'inherit !important' }}
            cursor='pointer'
            onClick={() => { scrollToExplode() }}
          />
        </Stack>
      </Container>

      <Container id='explode-time-yay' ref={explodeSection} paddingY='12'>
        <Stack spacing='8' direction='column' alignItems='center' textAlign='center'>
          <Heading>
            QUICK!<br />Blow up my website!
          </Heading>
          <Text>
            Press that big red button below to explode everything!
          </Text>
          <Image
            id='big-button'
            onClick={() => { console.log('kaboom') }}
            src={BigButton}
            borderRadius='full'
            boxSize='48'
            cursor='pointer'
            transition='all 0.3s'
            _hover={{
              boxShadow: `0 0 20px 5px ${useThemed({ default: 'white', light: 'black' })}`
            }}
          />
        </Stack>
      </Container>
    </>
  )
}