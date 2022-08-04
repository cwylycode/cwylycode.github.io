import { Box, Container, Divider, Flex, List, ListIcon, ListItem, Spacer, Text, useBreakpointValue, usePrefersReducedMotion } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
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
          <Box maxWidth='100%'>
            <Text fontSize='2xl' fontWeight='bold' marginBottom='5'>
              Some Highlights
            </Text>
            <List>
              {[
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magni, nemo ex nesciunt consequatur odit iste modi corrupti.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magni, nemo ex nesciunt consequatur odit iste modi corrupti.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magni, nemo ex nesciunt consequatur odit iste modi corrupti.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magni, nemo ex nesciunt consequatur odit iste modi corrupti.'
              ].map((text, i) => (
                <ListItem
                  key={i}
                  marginBottom='5'
                  marginLeft='5'
                  fontSize='sm'
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