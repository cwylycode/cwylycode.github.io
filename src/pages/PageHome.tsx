import {
  Box,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  usePrefersReducedMotion,
} from '@chakra-ui/react';
import useThemed from '../hooks/use-themed';

import { useScrollIntoView } from '@mantine/hooks';
import { motion } from 'framer-motion';

import BigButton from '../svg/big_button.svg'
import SvgDoodleLookie from '../components/svg/SvgDoodleLookie';
import SvgDoodleGreeter from '../components/svg/SvgDoodleGreeter';
import SvgDoodleScreamer from '../components/svg/SvgDoodleScreamer';
import SvgDoodleDoit from '../components/svg/SvgDoodleDoit';
import ParticlesPage from '../components/ParticlesPage';
import useRandomRgb from '../hooks/use-random-rgb';

export default function PageHome({ onExplodeClick }: { onExplodeClick: () => void }) {
  const noAnim = usePrefersReducedMotion()
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>()

  return (
    <>
      <ParticlesPage pOptions={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        particles: {
          number: {
            value: 64,
            density: {
              enable: true,
              value_area: 1200
            }
          },
          color: {
            value: useThemed({
              light: '#68d391',
              dark: '#63b3ed',
              hacker: '#007f00',
              random: useRandomRgb()
            })
          },
          shape: {
            type: "star",
            polygon: {
              nb_sides: 5
            },
          },
          opacity: {
            value: 0.75,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 12,
              size_min: 1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: useThemed({
              light: '#050505',
              dark: '#777777',
              hacker: '#006600',
              random: useRandomRgb()
            }),
            opacity: 0.5,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: ["bubble", 'grab'],
              parallax: {
                enable: true,
                force: 60,
                smooth: 10
              }
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 200,
              size: 10,
              duration: 3,
            },
          }
        },
        retina_detect: true,
      }}
      />
      <Container paddingTop={{ base: '10', md: '24' }} >
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
            position='relative'
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
              bgGradient='linear(90deg, themed.scheme 0%, themed.accent6 50%, themed.accent4 100%)'
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
              fontWeight='normal'
              fontFamily='body'
              as={motion.p}
              variants={{
                hide: { opacity: 0 },
                show: { opacity: 1 }
              }}
            >
              (It's pronounced 'why-lee' 😛)
            </Text>
            <Stack
              position='relative'
              direction='row'
              justifyContent='space-between'
            >
              <Box
                display='flex'
                width='48'
                height='48'
                position={{ base: 'unset', xl: 'absolute' }}
                top='-150px'
                left='-200px'
                as={motion.div}
                variants={{
                  hide: { scaleY: 0 },
                  show: { scaleY: 1, transition: { type: 'spring', bounce: 0.8 } }
                }}
              >
                <SvgDoodleGreeter alignSelf='flex-end' />
              </Box>
              <Box
                display='flex'
                width='48'
                height='48'
                position={{ base: 'unset', xl: 'absolute' }}
                top='-300px'
                right='-200px'
                as={motion.div}
                variants={{
                  hide: { scaleY: 0 },
                  show: { scaleY: 1, transition: { type: 'spring', bounce: 0.8 } }
                }}
              >
                <SvgDoodleScreamer alignSelf='flex-end' />
              </Box>
            </Stack>
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
              hide: { opacity: 0, x: -50 },
              show: { opacity: 1, x: 0 }
            }}
          >
            <SvgDoodleLookie
              width={{ base: '48', md: '64' }}
              marginLeft='auto !important'
              marginRight={{ base: 'auto !important', md: 'inherit !important' }}
              cursor='pointer'
              onClick={() => { scrollIntoView() }}
            />
          </Box>
        </Stack>
      </Container>

      <Container
        id='explode-time-yay'
        ref={targetRef}
        position='relative'
        paddingY='12'
        as={motion.div}
        initial={noAnim ? undefined : 'initial'}
        whileInView={noAnim ? undefined : 'animate'}
        viewport={{
          once: true,
          amount: 0.3
        }}
        variants={{
          initial: {},
          animate: { transition: { delayChildren: 1, staggerChildren: 0.5 } }
        }}
      >
        <Stack spacing='8' direction='column' alignItems='center' textAlign='center'>
          <Heading
            as={motion.h2}
            variants={{
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0 }
            }}
          >
            QUICK!<br />Blow up my website!
          </Heading>
          <Text
            as={motion.p}
            variants={{
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0 }
            }}
          >
            Press that big red button below to explode everything!
          </Text>
          <Image
            id='big-button'
            as={motion.img}
            variants={{
              initial: { scale: 0 },
              animate: { scale: 1 }
            }}
            whileHover={noAnim ? undefined : {
              boxShadow: `0 0 20px 5px ${useThemed({ default: 'white', light: 'black' })}`
            }}
            onClick={onExplodeClick}
            src={BigButton}
            borderRadius='full'
            boxSize='48'
            cursor='pointer'
          />
        </Stack>
        <Box
          as={motion.div}
          variants={{
            initial: { opacity: 0, x: -50 },
            animate: { opacity: 1, x: 0 }
          }}
          position='absolute'
          width='48'
          height='48'
          bottom={{ base: '-135px', xl: '0px' }}
          left={{ base: '0px', xl: '-40px' }}
        >
          <SvgDoodleDoit />
        </Box>
      </Container>
    </>
  )
}