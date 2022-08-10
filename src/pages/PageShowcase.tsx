import { Box, Container, Flex, Image, Text, useBreakpointValue, useDisclosure, useOutsideClick } from "@chakra-ui/react";
import PageHeader from "../components/PageHeader";
import img from '../../res/lazyface.png'
import { useRef } from "react";
import { motion } from "framer-motion";

function Card() {
  const marginFactor = useBreakpointValue({ base: '0px', md: '13rem' })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cardRef = useRef<HTMLDivElement>(null)

  function openCard() {
    if (isOpen) return
    onOpen()
  }
  function closeCard() {
    if (!isOpen) return
    onClose()
  }
  useOutsideClick({
    ref: cardRef,
    handler: () => { closeCard() }
  })

  return (
    <Box
      onClick={openCard}
      cursor='pointer'
      position='relative'
      height='64'
      maxWidth={{ base: '100%', sm: '50%', md: '40%' }}
      flexBasis={{ base: '100%', sm: '50%', md: '40%' }}
      padding='5'
      _odd={{ base: {}, md: { paddingLeft: 0 } }}
      _even={{ base: {}, md: { paddingRight: 0 } }}
      sx={{
        '&:nth-of-type(4n+1),&:nth-of-type(4n+4)': {
          flexBasis: { base: '100%', sm: '50%', md: '60%' },
          maxWidth: { base: '100%', sm: '50%', md: '60%' }
        }
      }}
    >
      <Box
        as={motion.div}
        layout
        cursor='auto'
        pointerEvents='none'
        width='100%'
        height='100%'
        sx={isOpen ? {
          width: `calc(100% - ${marginFactor})`,
          top: '0px',
          left: `${marginFactor}`,
          position: 'fixed',
          zIndex: '1',
          overflow: 'hidden',
          padding: '40px 0'
        } : {}}
      >
        <Box
          ref={cardRef}
          as={motion.div}
          position='relative'
          top='0px'
          borderRadius='20'
          backgroundColor='green.400'
          overflow='hidden'
          width='100%'
          height='100%'
          maxHeight={isOpen ? 'auto' : '48'}
          margin='0 auto'
          sx={isOpen ? {
            backgroundColor: 'red.400',
            height: 'auto',
            overflow: 'hidden',
            maxWidth: '700px'
          } : {}}
        >
          <Box
            position='absolute'
            top='0px'
            overflow='hidden'
            height='420px'
            width='100vw'
            transform='translateZ(0)'
          >
            <Image src={img} />
          </Box>
          <Box
            padding='460px 35px 35px 35px'
            width='90vw'
            maxWidth='700px'
          >
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda molestias nam adipisci voluptas rem voluptatem odio, iusto saepe quidem, explicabo culpa quibusdam. Provident ea laudantium id ipsum quos facere dicta?<br /><br />
              Quo tempora repudiandae molestiae. Saepe aliquam minima, blanditiis ullam minus eos recusandae voluptatibus dolores ab necessitatibus! Animi nesciunt sunt dignissimos fuga provident, sed, porro, dolore consequuntur labore illum maiores hic.<br /><br />
              Culpa fugiat perspiciatis rem quasi reiciendis ex nostrum voluptas dicta sequi laborum cumque aliquid, magni assumenda incidunt atque qui nihil itaque distinctio, adipisci, quae magnam odio praesentium possimus! Quo, reiciendis.<br /><br />
              Corrupti esse eius recusandae reprehenderit voluptate quae nesciunt laborum unde odio, nobis nam nisi consequatur nulla delectus et exercitationem laudantium, officiis atque expedita deserunt laboriosam perspiciatis animi. Eos, repellendus obcaecati?<br /><br />
              Minima commodi magni, quae rerum sint ex consequatur sit laudantium natus molestias sequi, officiis animi voluptatem cumque, eum provident suscipit incidunt aliquid saepe! Eligendi autem aliquid accusantium temporibus, suscipit iste!<br /><br />
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default function PageShowcase() {
  return (
    <>
      <PageHeader title="SHOWCASE" />
      <Container maxWidth='5xl' marginBottom='10'>
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          wrap={{ base: 'nowrap', sm: 'wrap' }}
          alignContent='flex-start'
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