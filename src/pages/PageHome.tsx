import {
  Box,
  Button,
  Container,
  Heading,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import useThemed from '../hooks/use-themed';

function BigButton() {
  const buttonText = <svg viewBox="0 -100 500 500">
    <path
      id="curve"
      fill='transparent'
      d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
    />
    <path
      id="revcurve"
      fill='transparent'
      d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
      transform='scale(1,-1) translate(0,-300)'
    />
    <text fontSize='120px' fill='white' x='50'>
      <textPath xlinkHref="#curve">
        PUSH
      </textPath>
    </text>
    <text fontSize='120px' fill='white' x='90' dominantBaseline='hanging'>
      <textPath xlinkHref="#revcurve">
        ME!
      </textPath>
    </text>
  </svg>

  return (
    <Box
      rounded='full'
      bgGradient='radial(black 0%, grey 66%, white 67%, grey 70%)'
      width='36'
      height='36'
      padding='2'
      transition='all 0.3s'
      _hover={{
        boxShadow: `0 0 20px 5px ${useThemed({ default: 'white', light: 'black' })}`
      }}
    >
      <Button
        variant='unstyled'
        display='block'
        color='white'
        bgGradient='radial(rgb(255,0,0) 0%, rgb(128,0,0) 50%, rgb(64,0,0) 100%)'
        rounded='full'
        width='100%'
        height='100%'
        fontFamily='Poppins'
        fontWeight='extrabold'
      >
        {buttonText}
      </Button>
    </Box>
  )
}

export default function PageHome() {
  return (
    <>
      <Container paddingY='24' textAlign='center'>
        <Stack spacing='8' direction='column'>
          <Text fontSize={{ base: 'sm', md: 'large', lg: 'xl' }}>
            The name's Wyly ...
          </Text>

          <Heading textAlign='center' fontSize={{ base: '3xl', md: '5xl', lg: '7xl' }}>
            <Text color='themed.accent3'>
              Colin Wyly
            </Text>
            <Box
              minHeight='1'
              marginTop='2'
              marginBottom='2'
              marginX='auto'
              maxWidth='75%'
              bgGradient='linear(90deg, themed.scheme 0%, themed.secondary 50%, themed.scheme 100%)'
            />
            <Text fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}>
              {useThemed({
                default: 'Coder | Developer | Tech Guy',
                hacker: 'Coder I Developer I Tech Guy'
              })}
            </Text>
            <Text marginTop='5' fontSize='12px' fontWeight='normal' fontFamily='body'>
              (It's pronounced 'why-lee') <Text as='span' marginLeft='2' fontSize='16px'>😛</Text>
            </Text>
          </Heading>

          <Text>
            Thanks for stopping by! You can find out more about me and my work by visiting the many links peppered all over this site.
          </Text>

          <Heading paddingTop='10'>
            But First ...
          </Heading>
        </Stack>
      </Container>

      <Container textAlign='center'>
        <Spacer minHeight='100' />
        <Stack spacing='8' direction='column' alignItems='center'>
          <Heading>
            QUICK!<br />Blow up my website!
          </Heading>
          <Text>
            Push the big red button below to explode everything!
          </Text>
          <BigButton />
          <Spacer minHeight='24' />
        </Stack>
      </Container>
    </>
  )
}