import { Box, Button, Container, Heading, Text, usePrefersReducedMotion } from "@chakra-ui/react";
import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";
import SvgDoodlePointGuy from "../components/svg/SvgDoodlePointGuy";
import ParticlesPage from "../components/ParticlesPage";

export default function PageContact() {
  const noAnim = usePrefersReducedMotion()
  return (
    <>
      <ParticlesPage pOptions={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble"
            }
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 0.3,
              mix: false,
              opacity: 1,
              size: 4,
              divs: {
                distance: 200,
                duration: 0.4,
                mix: false,
                selectors: []
              }
            },
          }
        },
        particles: {
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 1200
              }
            },
            direction: "bottom",
            enable: true,
            outModes: {
              default: 'out'
            }
          },
          number: {
            density: {
              enable: true
            },
            value: 400
          },
          opacity: {
            random: {
              enable: true,
              minimumValue: 0.1
            },
            value: {
              min: 0.1,
              max: 0.5
            },
            animation: {
              speed: 1,
              minimumValue: 0.1
            }
          },
          size: {
            random: {
              enable: true,
              minimumValue: 1
            },
            value: {
              min: 1,
              max: 10
            },
            animation: {
              speed: 40,
              minimumValue: 0.1
            }
          },
          life: {
            count: 0,
            delay: {
              random: {
                enable: false,
                minimumValue: 0
              },
              value: 0,
              sync: false
            },
            duration: {
              random: {
                enable: false,
                minimumValue: 0.0001
              },
              value: 0,
              sync: false
            }
          },
        }
      }}
      />
      <PageHeader title="CONTACT" />
      <Container position='relative' maxWidth='5xl' paddingY='12' centerContent>
        <Box
          as={motion.div}
          marginBottom='8'
          textAlign='center'
          initial={noAnim ? undefined : { opacity: 0, y: -30 }}
          animate={noAnim ? undefined : { opacity: 1, y: 0, transition: { delay: 1 } }}
        >
          <Heading color='themed.accent3'>Throw some words at my face!</Heading>
          <Text marginTop='4' fontSize='xl'>
            The best way to get in touch with me is through LinkedIn. Click the button below to go to my profile and send me a message!
          </Text>
        </Box>

        <Button
          href="https://www.linkedin.com/in/cwylycode"
          textAlign='center'
          height='auto'
          maxWidth='max-content'
          whiteSpace='break-spaces'
          marginTop='20'
          paddingY={{ base: '5', sm: '10' }}
          _hover={noAnim ? {} : undefined}
          as={motion.a}
          initial={noAnim ? undefined : { opacity: 0, y: 30 }}
          animate={noAnim ? undefined : { opacity: 1, y: 0, transition: { delay: 1.5 } }}
          whileHover={noAnim ? undefined : {
            scale: [1, 1.5],
            transition: { repeat: Infinity, repeatType: 'mirror' }
          }}
        >
          Connect with me on LinkedIn!
        </Button>

        <Box
          as={motion.div}
          initial={noAnim ? undefined : { opacity: 0, x: -50 }}
          animate={noAnim ? undefined : { opacity: 1, x: 0, transition: { delay: 2 } }}
          display={{ base: 'none', xl: 'unset' }}
          position='absolute'
          bottom='10'
          left='0'
          width='64'
        >
          <SvgDoodlePointGuy />
        </Box>
        <Box
          as={motion.div}
          initial={noAnim ? undefined : { opacity: 0, x: 50 }}
          animate={noAnim ? undefined : { opacity: 1, x: 0, transition: { delay: 2 } }}
          display={{ base: 'none', xl: 'unset' }}
          position='absolute'
          bottom='10'
          right='0'
          width='64'
        >
          <SvgDoodlePointGuy transform='rotateY(180deg)' />
        </Box>

      </Container>
    </>
  )
}