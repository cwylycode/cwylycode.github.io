import { Box, chakra, Container, Divider, Flex, Icon, List, ListIcon, ListItem, Spacer, Text, Tooltip, useBreakpointValue, usePrefersReducedMotion } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5, IoLogoPython, IoLogoSass, IoLogoWordpress } from "react-icons/io";
import { SiC, SiCplusplus, SiCsharp, SiGit, SiJava, SiJavascript, SiReact, SiTypescript } from "react-icons/si"
import PageHeader from "../components/PageHeader";
import SvgDoodleTreeGuy from "../components/svg/SvgDoodleTreeGuy";
import SvgSkillTree from "../components/svg/SvgSkillTree";

export default function PageSkillz() {
  const noAnim = usePrefersReducedMotion()
  return (
    <>
      <PageHeader title="SKILLZ" />

      <Container maxWidth='5xl' paddingY='12'>
        <Flex
          direction={{ base: 'column', lg: 'unset' }}
          justifyContent='space-between'
          alignItems='center'
        >
          <Box
            position='relative'
            width='100%'
            height='100%'
            as={motion.div}
            variants={{
              initial: {},
              animate: { transition: { delayChildren: 3, staggerChildren: 0.1 } }
            }}
            initial={noAnim ? undefined : 'initial'}
            animate={noAnim ? undefined : 'animate'}
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
                  variants={{
                    initial: { scale: 0 },
                    animate: { scale: 1 }
                  }}
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
              position='absolute'
              width='30%'
              height='30%'
              right='0px'
              bottom='0px'
              as={motion.div}
              initial={noAnim ? undefined : { scale: 0 }}
              animate={noAnim ? undefined : { scale: 1, transition: { delay: 4 } }}
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
            as={motion.hr}
            initial={noAnim ? undefined : { opacity: 0 }}
            animate={noAnim ? undefined : { opacity: 1, transition: { delay: 2 } }}
          />
          <Spacer minWidth='10' minHeight={{ base: 'unset', lg: '10' }} />

          <Box maxWidth='100%'
            as={motion.div}
            variants={{
              initial: {},
              animate: { transition: { delayChildren: 1, staggerChildren: 1 } }
            }}
            initial={noAnim ? undefined : 'initial'}
            animate={noAnim ? undefined : 'animate'}
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
                'Decades of experience with electronic technology, both casually and at an IT professional level.',
                'Multiple years of experience with general programming concepts and languages, such as Python, JavaScript, the "C" family and even php for some odd reason.',
                'Knowledge of and experience with various frameworks, such as React and Wordpress.',
                'Working on and contributing to projects through collaboration - also known as "GitHub".'
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
          as={motion.hr}
          initial={noAnim ? undefined : { opacity: 0 }}
          animate={noAnim ? undefined : { opacity: 1, transition: { delay: 2 } }}
        />

        <Text
          as={motion.p}
          initial={noAnim ? undefined : { opacity: 0 }}
          whileInView={noAnim ? undefined : {
            opacity: 1,
            transition: {
              duration: 2,
              delay: 0.5
            }
          }}
          viewport={{
            once: true,
            amount: 0.3
          }}
        >
          Some say the best skill a coder can have is not their proficiency with a language/technology, or even the knowledge they get from experience. No, it's their ability to solve problems and demonstrate critical thinking in order to get the job done.
          <br /><br />
          For the past couple of years I've been studying and refining my coding skills, challenging myself to see how I can solve all sorts of problems in the realm of comuputer science. Through it all, I ended up writing quite a bit of software in some form or another. I found I rather enjoyed it, especially whenever I injected my own bits of humor and creativity into the mix. After all, I believe if you're going to code something, you might as well have fun with it and amuse yourself - and others, too!
        </Text>
      </Container>
    </>
  )
}