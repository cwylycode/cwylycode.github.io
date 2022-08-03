import { Box, Divider, Flex, Heading, usePrefersReducedMotion } from "@chakra-ui/react";
import { motion } from "framer-motion";

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
            <Heading
              key={i}
              display='inline-block'
              as={motion.span}
              variants={{
                initial: { y: -200 },
                active: { y: 0, transition: { type: 'spring', bounce: 0.5 } }
              }}
            >
              {c}
            </Heading>
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