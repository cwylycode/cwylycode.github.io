import { Divider, Flex, Heading, usePrefersReducedMotion } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function PageHeader({ title }: { title: string }) {
  const noAnim = usePrefersReducedMotion()
  return (
    <Flex
      direction='column'
      alignItems='center'
      paddingTop='5'
      marginBottom='10'
      as={motion.div}
      initial={noAnim ? undefined : { opacity: 0, y: -100 }}
      animate={noAnim ? undefined : {
        opacity: 1,
        y: 0,
        transition: {
          opacity: {
            duration: 2
          },
          y: {
            type: 'spring',
            stiffness: 50,
            damping: 2,
            mass: 0.5,
            velocity: 100
          }
        }
      }}
    >
      <Heading>{title}</Heading>
      <Divider
        marginTop='5'
        borderWidth='1px'
        borderRadius='full'
        maxWidth='80%'
      />
    </Flex>
  )
}