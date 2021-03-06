import {
  Box,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  usePrefersReducedMotion,
} from '@chakra-ui/react';
import useThemed from '../hooks/use-themed';

import { useScrollIntoView } from '@mantine/hooks';

import BigButton from '../svg/big_button.svg'
import SvgDoodleLookie from '../components/svg/SvgDoodleLookie';
import ParticlesHomePage from '../components/ParticlesHomePage';
import { motion } from 'framer-motion';

interface PageHomeProps {
  onExplodeClick: () => void
}
export default function PageHome({ onExplodeClick }: PageHomeProps) {
  const noAnim = usePrefersReducedMotion()
  const showParticles = useBreakpointValue({ base: false, md: true })
  const { scrollIntoView: scrollToExplode, targetRef: explodeSection } = useScrollIntoView<HTMLDivElement>()

  return (
    <>
      {showParticles &&
        <Box
          as={motion.div}
          initial={noAnim ? undefined : { opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 7 } }}
        >
          <ParticlesHomePage />
        </Box>}
      <Container
        paddingTop={{ base: '10', md: '24' }}
      >
        <Stack
          spacing='12'
          direction='column'
          textAlign='center'
          as={motion.div}
          variants={{ hide: {}, show: { transition: { staggerChildren: 2 } } }}
          initial={noAnim ? undefined : 'hide'}
          animate='show'
        >
          <Text
            fontSize={{ md: 'large', lg: 'xl' }}
            textAlign={{ md: 'left' }}
            as={motion.p}
            variants={{
              hide: { opacity: 0 },
              show: { opacity: 1 }
            }}
          >
            The name's Wyly ...
          </Text>

          <Box
            textAlign='center'
            as={motion.div}
            variants={{ hide: {}, show: { transition: { staggerChildren: 0.3 } } }}
          >
            <Heading
              color='themed.accent3'
              fontSize={{ base: '5xl', md: '7xl', lg: '8xl' }}
              as={motion.h2}
              variants={{
                hide: { opacity: 0, y: -30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    bounce: 0.8
                  }
                }
              }}
            >
              Colin Wyly
            </Heading>
            <Box
              minHeight='1'
              marginTop='2'
              marginBottom='2'
              marginX='auto'
              maxWidth='75%'
              bgGradient='linear(90deg, themed.scheme 0%, themed.secondary 50%, themed.scheme 100%)'
              as={motion.div}
              variants={{
                hide: { maxWidth: '0%' },
                show: { maxWidth: '75%' }
              }}
            />
            <Text
              fontSize={{ base: 'md', md: 'lg', lg: '2xl' }}
              as={motion.p}
              variants={{
                hide: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    bounce: 0.8
                  }
                }
              }}
            >
              Coder I Developer I Tech Guy
            </Text>
            <Text
              marginTop='12'
              fontSize={{ base: '8px', md: '10px', lg: '12px' }}
              fontWeight='normal' fontFamily='body'
              as={motion.p}
              variants={{
                hide: { opacity: 0 },
                show: { opacity: 1 }
              }}
            >
              (It's pronounced 'why-lee' ????)
            </Text>
          </Box>

          <Text
            textAlign={{ md: 'left' }}
            as={motion.p}
            variants={{
              hide: { opacity: 0, x: -30 },
              show: { opacity: 1, x: 0 }
            }}
          >
            Thanks for stopping by! You can find out more about me and my work by visiting the many links peppered all over this site.
          </Text>

          <Box
            as={motion.div}
            variants={{
              hide: { opacity: 0, x: 30 },
              show: { opacity: 1, x: 0 }
            }}
          >
            <SvgDoodleLookie
              width={{ base: '48', md: '64' }}
              marginLeft='auto !important'
              marginRight={{ base: 'auto !important', md: 'inherit !important' }}
              cursor='pointer'
              onClick={() => { scrollToExplode() }}
            />
          </Box>
        </Stack>
      </Container>

      <Container
        id='explode-time-yay'
        ref={explodeSection}
        paddingY='12'
        as={motion.div}
        initial={noAnim ? undefined : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 6 } }}
      >
        <Stack spacing='8' direction='column' alignItems='center' textAlign='center'>
          <Heading>
            QUICK!<br />Blow up my website!
          </Heading>
          <Text>
            Press that big red button below to explode everything!
          </Text>
          <Image
            id='big-button'
            onClick={onExplodeClick}
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