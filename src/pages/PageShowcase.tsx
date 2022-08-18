import { Box, Container, Divider, Flex, Heading, Link, Spacer, Text, usePrefersReducedMotion } from "@chakra-ui/react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import ShowcaseCard from "../components/ShowcaseCard";
import { ShowcaseItems } from "../components/ShowcaseItems";
import SvgDoodleStarGuy from "../components/svg/SvgDoodleStarGuy";
import SvgDoodleStarGuyText from "../components/svg/SvgDoodleStarGuyText";

export default function PageShowcase() {
  const noAnim = usePrefersReducedMotion()
  return (
    <>
      <PageHeader title="SHOWCASE" />
      <Container maxWidth='5xl' paddingY='12'>
        <Flex
          className="card-list"
          as={motion.div}
          initial={noAnim ? undefined : 'initial'}
          animate={noAnim ? undefined : 'animate'}
          variants={{
            initial: {},
            animate: { transition: { delayChildren: 2, staggerChildren: 0.5 } }
          }}
          direction={{ base: 'column', sm: 'row' }}
          wrap={{ base: 'nowrap', sm: 'wrap' }}
        >
          {ShowcaseItems.map((item, i) => (
            <ShowcaseCard
              key={i}
              img={item.img}
              imgOffset={item.imgOffset}
              imgSize={item.imgSize}
              link={item.link}
              linkText={item.linkText}
              text={item.text}
              title={item.title}
            />
          ))}
        </Flex>

        <Divider
          marginX='auto'
          marginTop='16'
          marginBottom='8'
          borderWidth='1px'
          borderRadius='full'
          maxWidth='80%'
          as={motion.hr}
          initial={noAnim ? undefined : { opacity: 0 }}
          animate={noAnim ? undefined : { opacity: 1, transition: { delay: 2 } }}
        />

        <Box
          as={motion.div}
          initial={noAnim ? undefined : 'initial'}
          whileInView={noAnim ? undefined : 'animate'}
          viewport={{
            once: true,
            amount: 0.3
          }}
          variants={{
            initial: {},
            animate: { transition: { staggerChildren: 0.5 } }
          }}
          overflowX='hidden'
        >
          <Box
            as={motion.div}
            variants={{
              initial: {},
              animate: { transition: { staggerChildren: 0.05 } }
            }}
            marginBottom='8'
            textAlign='center'
          >
            {"...But wait, there's more!".split('').map((c, i) => (
              <Heading
                key={i}
                as={motion.span}
                variants={{
                  initial: { opacity: 0 },
                  animate: { opacity: 1 }
                }}
              >
                {c}
              </Heading>
            ))}
          </Box>
          <Flex
            direction={{ base: 'column', xl: 'row' }}
            justifyContent='space-between'
          >
            <Text
              as={motion.p}
              variants={{
                initial: { opacity: 0, x: -40 },
                animate: { opacity: 1, x: 0, transition: { delay: 2 } }
              }}
            >
              These are only the highlights of my work (more or less). You can find even more if you <Link href="https://github.com/cwylycode?tab=repositories">visit my repositories</Link> on Github. You'll find odd bits of code and smaller projects and even some projects I've contributed to. Go on and check it out!
            </Text>
            <Spacer minHeight='16' />
            <Flex
              as={motion.div}
              variants={{
                initial: { opacity: 0, x: 40 },
                animate: { opacity: 1, x: 0, transition: { delay: 2 } }
              }}
              direction={{ base: 'column', sm: 'row' }}
              alignItems={{ base: 'center', xl: 'unset' }}
              justifyContent='center'
            >
              <SvgDoodleStarGuyText width='64' maxWidth='100%' />
              <SvgDoodleStarGuy width='48' maxWidth='100%' />
            </Flex>
          </Flex>
        </Box>
      </Container>
    </>
  )
}