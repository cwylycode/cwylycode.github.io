import { Container, Flex, usePrefersReducedMotion } from "@chakra-ui/react";
import PageHeader from "../components/PageHeader";
import ShowcaseCard, { ShowcaseCardProps } from "../components/ShowcaseCard";
import img_react_tac_toe from '../images/react_tac_toe.jpg'
import img_pytris from '../images/pytris.jpg'

const cards: Array<ShowcaseCardProps> = [
  {
    title: 'React-Tac-Toe',
    img: img_react_tac_toe,
    imgOffset: { x: 25, y: 64 },
    imgSize: 600,
    link: 'https://cwylycode.github.io/react-tac-toe',
    linkText: 'Visit Website',
    text: 'My take on the famous tic-tac-toe game.\n\nThis was my first React project - it was either do a tic-tac-toe game, or make a shopping list (both ideas are popular first-time React projects). Made with bootstrap for handling css.'
  },
  {
    title: 'Pytris',
    img: img_pytris,
    imgOffset: { x: 40, y: 350 },
    imgSize: 700,
    link: 'https://github.com/pytris',
    linkText: 'Check it on GitHub',
    text: 'Test text.'
  }
]

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
          {cards.map((card, i) => (
            <ShowcaseCard
              key={i}
              img={card.img}
              imgOffset={card.imgOffset}
              imgSize={card.imgSize}
              link={card.link}
              linkText={card.linkText}
              text={card.text}
              title={card.title}
            />
          ))}
        </Flex>
      </Container>
    </>
  )
}