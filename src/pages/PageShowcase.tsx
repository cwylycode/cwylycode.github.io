import { Box, Container, Flex, Image, Text, useBreakpointValue, useDisclosure, useOutsideClick } from "@chakra-ui/react";
import PageHeader from "../components/PageHeader";
import img from '../../res/stockimage.jpg'
import { useRef } from "react";
import { AnimatePresence, motion, ResolvedValues } from "framer-motion";

function Card() {
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
    handler: () => { onClose() }
  })

  return (
    <Box
      className="card-holder"
      cursor={isOpen ? 'auto' : 'pointer'}
      position='relative'
      height='64'
      maxHeight='64'
      maxWidth={{ base: '100%', sm: '50%', md: '40%' }}
      flexBasis={{ base: 'unset', sm: '50%', md: '40%' }}
      padding='5'
      _odd={{ base: {}, md: { paddingLeft: 0 } }}
      _even={{ base: {}, md: { paddingRight: 0 } }}
      sx={{
        '&:nth-of-type(4n+1),&:nth-of-type(4n+4)': {
          maxWidth: { base: '100%', sm: '50%', md: '60%' },
          flexBasis: { base: 'unset', sm: '50%', md: '60%' }
        }
      }}
    >
      <AnimatePresence >
        {isOpen &&
          <Box
            key={'cardOverlay'}
            className="card-overlay"
            as={motion.div}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            position='fixed'
            opacity={0}
            backgroundColor='blackAlpha.800'
            top='0px'
            left='0px'
            zIndex='9999'
            width='100%'
            height='100%'
          />
        }
      </AnimatePresence>
      <Box
        className="card"
        onClick={isOpen ? undefined : onOpen}
        as={motion.div}
        layout
        ref={cardRef}
        borderRadius='20'
        backgroundColor='green.400'
        overflow='hidden'
        height='100%'
        sx={isOpen ? {
          position: 'fixed',
          top: '50%',
          left: '50%',
          translate: '-50% -50%',
          backgroundColor: 'red.400',
          width: '32rem',
          height: '48rem',
          maxHeight: '80%',
          maxWidth: '80%',
          zIndex: '10000'
        } : {}}
      >
        <Box
          className="card-image"
          as={motion.div}
          height='33%'
          width='100%'
          backgroundImage={img}
          backgroundPosition='center'
          backgroundRepeat='no-repeat'
          backgroundSize='512px'
        />
        <Box
          className="card-text"
          as={motion.div}
          overflow='auto'
          height='50%'
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
  )
}

export default function PageShowcase() {
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