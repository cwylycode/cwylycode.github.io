import { Box, Divider, Flex, Heading, usePrefersReducedMotion } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

function Letter({ c, noAnim }: { c: string, noAnim: boolean }) {
  const [startHover, setStartHover] = useState(false)
  return (
    <Heading
      display='inline-block'
      as={motion.span}
      variants={{
        initial: { y: -200 },
        active: { y: 0, transition: { type: 'spring', bounce: 0.5 } },
        hover: { y: 0, scaleX: 2, scaleY: 0.5, transition: { repeat: 1, repeatType: "reverse" } }
      }}
      animate={!noAnim && startHover ? 'hover' : undefined}
      onHoverStart={() => {
        if (startHover) return
        setStartHover(true)
      }}
      onAnimationComplete={() => { setStartHover(false) }}
    >
      {c}
    </Heading>
  )
}

export default function PageHeader({ title }: { title: string }) {
  const noAnim = usePrefersReducedMotion()
  return (
    <Flex
      direction='column'
      alignItems='center'
      paddingTop='5'
      marginBottom='10'
    >
      <Box
        as={motion.div}
        variants={{
          initial: {},
          active: { transition: { staggerChildren: 2 / title.length } }
        }}
        initial={noAnim ? undefined : 'initial'}
        animate={noAnim ? undefined : 'active'}
      >
        {
          title.split('').map((c, i) => (
            <Letter key={i} c={c} noAnim={noAnim} />
          ))
        }
      </Box>
      <Divider
        as={motion.hr}
        initial={noAnim ? undefined : { maxWidth: '0%' }}
        animate={noAnim ? undefined : { maxWidth: '80%', transition: { duration: 2 } }}
        marginTop='5'
        borderWidth='1px'
        borderRadius='full'
        maxWidth='80%'
      />
    </Flex>
  )
}