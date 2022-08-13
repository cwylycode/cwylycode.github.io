import { Container, Flex, usePrefersReducedMotion } from "@chakra-ui/react";
import PageHeader from "../components/PageHeader";

export default function PageShowcase() {
  const noAnim = usePrefersReducedMotion()
  return (
    <>
      <PageHeader title="SHOWCASE" />
      <Container maxWidth='5xl' marginBottom='10'>
        <Flex
          className="card-list"
          direction={{ base: 'column', sm: 'row' }}
          wrap={{ base: 'nowrap', sm: 'wrap' }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Flex>
      </Container>
    </>
  )
}