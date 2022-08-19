import { Box, Button, Container, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftElement, Text, Textarea, usePrefersReducedMotion, VStack } from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { BiPaperPlane } from 'react-icons/bi'
import { MdOutlineMail } from 'react-icons/md'
import PageHeader from "../components/PageHeader";
import useThemed from "../hooks/use-themed";

export default function PageContact() {
  const noAnim = usePrefersReducedMotion()
  return (
    <>
      <PageHeader title="CONTACT" />
      <Container maxWidth='5xl' paddingY='12'>
        <Box marginBottom='8' textAlign='center'>
          <Heading color='themed.accent3'>Throw some words at my face!</Heading>
          <Text marginTop='4' fontSize='xl'>Use the form below to send me an email.</Text>
        </Box>

        <Box marginTop='10' marginX='auto' width='min-content' maxWidth='100%' >
          <Box
            backgroundColor='themed.accent1'
            borderRadius="3xl"
            padding='10'
            width='md'
            maxWidth='100%'
          >
            <VStack spacing={5}>
              <FormControl id="name">
                <FormLabel>Your Name</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BsPerson color="gray.800" />}
                  />
                  <Input type="text" size="md" />
                </InputGroup>
              </FormControl>
              <FormControl id="name">
                <FormLabel>Your Email</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<MdOutlineMail color="gray.800" />}
                  />
                  <Input type="text" size="md" />
                </InputGroup>
              </FormControl>
              <FormControl id="name">
                <FormLabel>Your Message</FormLabel>
                <Textarea
                  borderColor="gray.300"
                  _hover={{
                    borderRadius: 'gray.300',
                  }}
                  placeholder="message"
                />
              </FormControl>
              <FormControl id="name">
                <Button
                  // isLoading
                  loadingText="Sending..."
                  leftIcon={<BiPaperPlane />}
                  width='100%'
                >
                  Send Message
                </Button>
              </FormControl>
            </VStack>
          </Box>

          <Text marginTop='5' fontSize='xs' textAlign='center'>
            * Relax. Your data won't be collected, stored in a database, sold to a third party, used for spam, butchered, mischaracterized, eaten, or used in some nefarious plot.
          </Text>
        </Box>
      </Container>
    </>
  )
}