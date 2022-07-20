import { Button, Container, Flex, Spacer, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SvgDoodleUnamused from "./svg/SvgDoodleUnamused";

export default function ExplosionAftermath() {
  return (
    <Flex width='100vw' height='100vh' direction='column' justifyContent='center'>
      <Container>
        <Flex
          as={motion.div}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          direction={{ base: 'column', md: 'row' }}
          alignItems='center'
          justifyContent='space-between'
        >
          <SvgDoodleUnamused width={{ base: 32, md: 64, lg: 72 }} />
          <Spacer minWidth='10' />
          <Flex
            marginTop={{ base: 8, md: 0 }}
            direction='column'
            justifyContent='space-between'
          >
            <Text fontSize='4xl'>"Meh."</Text>
            <Text fontSize='sm' fontStyle='italic'>- Some particle effects critic, maybe</Text>
            <Spacer minHeight='12' />
            <Button onClick={() => { window.location.reload() }}>RELOAD</Button>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}