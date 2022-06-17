import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import useThemed from '../hooks/use-themed';

import BigButton from '../svg/big_button.svg'
import { ReactComponent as Arrow } from '../svg/Arrow.svg'
import SvgBox from '../components/SvgBox';

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
              Coder I Developer I Tech Guy
            </Text>
            <Text marginTop='5' fontSize='12px' fontWeight='normal' fontFamily='body'>
              (It's pronounced 'why-lee' 😛)
            </Text>
          </Heading>

          <Text>
            Thanks for stopping by! You can find out more about me and my work by visiting the many links peppered all over this site.
          </Text>

          <Flex
            paddingTop='10'
            justifyContent='center'
          >
            <Heading>But First ...</Heading>
            <Box position='relative' width='32'>
              <SvgBox
                svgComp={<Arrow />}
                svgPathCSS={{ stroke: 'themed.secondary' }}
                width='32'
                position='absolute'
                top='-35px'
                right='10px'
              />
            </Box>
          </Flex>
        </Stack>
      </Container>

      <Container paddingY='12' textAlign='center' maxWidth='auto'>
        <Stack spacing='8' direction='column' alignItems='center'>
          <Heading>
            QUICK!<br />Blow up my website!
          </Heading>
          <Text>
            Push the big red button below to explode everything!
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