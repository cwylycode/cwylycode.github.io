import { Container, Flex, usePrefersReducedMotion } from "@chakra-ui/react";
import PageHeader from "../components/PageHeader";
import ShowcaseCard from "../components/ShowcaseCard";
import { ShowcaseItems } from "../components/ShowcaseItems";

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
      </Container>
    </>
  )
}