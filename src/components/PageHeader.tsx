import { Divider, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <Flex
      direction='column'
      alignItems='center'
      paddingTop='5'
      marginBottom='10'
      as={motion.div}
      initial={{ opacity: 0, y: -100 }}
      animate={{
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