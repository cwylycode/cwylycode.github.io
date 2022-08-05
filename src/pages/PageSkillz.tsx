import { Box, chakra, Container, Divider, Flex, Icon, List, ListIcon, ListItem, Spacer, Text, Tooltip, useBreakpointValue, usePrefersReducedMotion } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5, IoLogoPython, IoLogoSass, IoLogoWordpress } from "react-icons/io";
import { SiC, SiCplusplus, SiCsharp, SiGit, SiJava, SiJavascript, SiReact, SiTypescript } from "react-icons/si"
import PageHeader from "../components/PageHeader";
import SvgDoodleTreeGuy from "../components/svg/SvgDoodleTreeGuy";
import SvgSkillTree from "../components/svg/SvgSkillTree";

export default function PageSkillz() {
  const noAnim = false//usePrefersReducedMotion()
  return (
    <>
      <PageHeader title="SKILLZ" />

      <Container maxWidth='5xl' marginBottom='10'>
        <Flex
          direction={{ base: 'column', lg: 'unset' }}
          justifyContent='space-between'
          alignItems='center'
        >
          <Box
            position='relative'
            width='100%'
            height='100%'
          >
            <SvgSkillTree />
            {
              [
                {
                  name: 'html',
                  logo: IoLogoHtml5,
                  x: 9,
                  y: 12
                },
                {
                  name: 'css',
                  logo: IoLogoCss3,
                  x: 19,
                  y: 24
                },
                {
                  name: 'javascript',
                  logo: SiJavascript,
                  x: 21,
                  y: 7
                },
                {
                  name: 'typescript',
                  logo: SiTypescript,
                  x: 33,
                  y: 17
                },
                {
                  name: 'c',
                  logo: SiC,
                  x: 65,
                  y: 54
                },
                {
                  name: 'c++',
                  logo: SiCplusplus,
                  x: 55,
                  y: 43
                },
                {
                  name: 'c#',
                  logo: SiCsharp,
                  x: 76,
                  y: 33
                },
                {
                  name: 'java',
                  logo: SiJava,
                  x: 50,
                  y: 25
                },
                {
                  name: 'react',
                  logo: SiReact,
                  x: 38,
                  y: 0
                },
                {
                  name: 'python',
                  logo: IoLogoPython,
                  x: 66,
                  y: 13
                },
                {
                  name: 'scss',
                  logo: IoLogoSass,
                  x: 10,
                  y: 40
                },
                {
                  name: 'git',
                  logo: SiGit,
                  x: 24,
                  y: 54
                },
                {
                  name: 'wordpress',
                  logo: IoLogoWordpress,
                  x: 28,
                  y: 42
                }
              ].map((skill, i) => (
                <Box
                  key={i}
                  position='absolute'
                  width='15%'
                  height='15%'
                  left={`${skill.x}%`}
                  top={`${skill.y}%`}
                  bgGradient='radial(blackAlpha.900 0%,rgba(0,0,0,0) 50%)'
                  padding='3%'
                  as={motion.div}
                >
                  <Tooltip hasArrow label={skill.name.toUpperCase()} placement='top'>
                    <chakra.span display='inline-block' width='100%' height='100%'>
                      <Icon
                        as={skill.logo}
                        width='100%'
                        height='100%'
                        color='red.600'
                        verticalAlign='middle'
                      />
                    </chakra.span>
                  </Tooltip>
                </Box>
              ))
            }
            <Box
              display={{ base: 'none', xl: 'unset' }}
              position='absolute'
              width='32'
              height='32'
              right='8'
              bottom='0px'
              as={motion.div}
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { delay: 4 } }}
            >
              <SvgDoodleTreeGuy />
            </Box>
          </Box>
          <Spacer minWidth='10' minHeight={{ base: 'unset', lg: '10' }} />
          <Divider
            orientation={useBreakpointValue({ base: 'horizontal', lg: 'vertical' })}
            marginX='auto'
            marginTop='5'
            marginBottom='5'
            borderWidth='1px'
            borderRadius='full'
            maxWidth='80%'
            height={{ base: 'unset', lg: '80' }}
          />
          <Spacer minWidth='10' minHeight={{ base: 'unset', lg: '10' }} />
          <Box maxWidth='100%'
            as={motion.div}
            variants={{
              initial: {},
              animate: { transition: { delayChildren: 1, staggerChildren: 1 } }
            }}
            initial='initial'
            animate='animate'
          >
            <Text
              fontSize='2xl'
              fontWeight='bold'
              marginBottom='5'
              textAlign={{ base: 'center', lg: 'unset' }}
              as={motion.p}
              variants={{
                initial: {
                  opacity: 0,
                  y: 500
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { ease: 'easeOut' }
                }
              }}
            >
              Some Highlights
            </Text>
            <List
              as={motion.ul}
              variants={{ initial: {}, animate: { transition: { staggerChildren: 0.2 } } }}
            >
              {[
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magni, nemo ex nesciunt consequatur odit iste modi corrupti.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magni, nemo ex nesciunt consequatur odit iste modi corrupti.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magni, nemo ex nesciunt consequatur odit iste modi corrupti.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magni, nemo ex nesciunt consequatur odit iste modi corrupti.'
              ].map((text, i) => (
                <ListItem
                  key={i}
                  marginBottom='5'
                  marginLeft={{ base: 'unset', lg: '20' }}
                  fontSize='sm'
                  as={motion.li}
                  variants={{
                    initial: {
                      opacity: 0,
                      y: 500
                    },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: { ease: 'easeOut' }
                    }
                  }}
                >
                  <ListIcon as={FaCheckCircle} color='themed.scheme' verticalAlign='middle' />
                  {text}
                </ListItem>
              ))}
            </List>
          </Box>
        </Flex>

        <Divider
          marginX='auto'
          marginTop='5'
          marginBottom='5'
          borderWidth='1px'
          borderRadius='full'
          maxWidth='80%'
        />

        <Text
          as={motion.p}
          initial={noAnim ? undefined : { opacity: 0 }}
          animate={noAnim ? undefined : {
            opacity: 1,
            transition: {
              duration: 2,
              delay: 2
            }
          }}
        >
          For the past couple of years I've been studying and refining my coding skills. Through it all, I ended up writing quite a bit of software in some form or another. I found I rather enjoyed it, especially whenever I injected my own bits of humor and creativity into the mix. After all, I believe if you're going to code something, you might as well have fun with it and amuse yourself - and others, too!
          <br /><br />
          Oh, and this very website you are on.
        </Text>
      </Container>
    </>
  )
}