import { Box, Button, Container, Flex, IconButton, Text, useDisclosure, useOutsideClick, usePrefersReducedMotion } from "@chakra-ui/react";
import PageHeader from "../components/PageHeader";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import img from '../../res/stockimage.jpg'
import { useScrollLock } from "@mantine/hooks";
import { IoMdClose } from "react-icons/io";

function Card() {
  const noAnim = usePrefersReducedMotion()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cardRef = useRef<HTMLDivElement>(null)
  const [zIndex, setZIndex] = useState<number>(0)
  const [scrollLock, setScrollLock] = useScrollLock(false)

  function openCard() {
    if (isOpen) return
    onOpen()
    setScrollLock(true)
  }
  function closeCard() {
    if (!isOpen) return
    onClose()
    setScrollLock(false)
  }
  useOutsideClick({
    ref: cardRef,
    handler: () => { closeCard() }
  })

  return (
    <Box
      className="card-holder"
      as={motion.div}
      layout
      position='relative'
      height={{ base: '64', sm: '72', md: '96' }}
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
            cursor='auto'
          />
        }
      </AnimatePresence>
      <Flex
        className="card-base"
        as={motion.div}
        layout
        onLayoutAnimationStart={() => { setZIndex(10000) }}
        onLayoutAnimationComplete={() => { isOpen ? null : setZIndex(0) }}
        width='100%'
        height='100%'
        position='relative'
        justifyContent='center'
        alignItems='center'
        zIndex={zIndex}
        sx={isOpen ? {
          position: 'fixed',
          top: '0px',
          left: '0px',
        } : {}}
      >
        <Box
          className="card"
          as={motion.div}
          onClick={isOpen ? undefined : openCard}
          ref={cardRef}
          layout
          position='relative'
          borderRadius='20'
          backgroundColor='themed.primary'
          overflow='hidden'
          width='100%'
          height='100%'
          cursor='pointer'
          sx={isOpen ? {
            width: '24rem',
            height: '32rem',
            maxWidth: '90%',
            maxHeight: '90%',
            cursor: 'auto'
          } : {}}
        >
          {isOpen && <IconButton
            className="card-close-button"
            onClick={closeCard}
            aria-label="close card"
            icon={<IoMdClose />}
            position='absolute'
            top='-5px'
            right='-5px'
            fontSize='24px'
            color='black'
            colorScheme='gray'
            borderRadius='5px'
            zIndex='1'
          />}
          <Box
            className="card-image"
            as={motion.div}
            layout
            position='relative'
            height='150%'
            width='100%'
            backgroundImage={img}
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            sx={isOpen ? {
              height: '33%'
            } : {}}
          >
            <Box
              className="card-image-gradient"
              width='100%'
              height='100%'
              bgGradient='linear(to-t, themed.primary 0%, transparent 25%)'
            />
            <Text
              className="card-title"
              as={motion.p}
              layout
              position='absolute'
              top='25px'
              left='5'
              fontSize='3xl'
              color='white'
              textShadow='0px 0px 8px #000'
              sx={isOpen ? {
                top: '50px'
              } : {}}
            >
              My Portfolio Website
            </Text>
          </Box>
          <Flex
            height='auto'
            direction='column'
            alignItems='center'
          >
            <Box
              className="card-text"
              as={motion.div}
              layout
              overflow='auto'
              height='200px'
              paddingX='5'
            >
              <Text
                as={motion.p}
                layout
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda molestias nam adipisci voluptas rem voluptatem odio, iusto saepe quidem, explicabo culpa quibusdam. Provident ea laudantium id ipsum quos facere dicta?<br /><br />
                Quo tempora repudiandae molestiae. Saepe aliquam minima, blanditiis ullam minus eos recusandae voluptatibus dolores ab necessitatibus! Animi nesciunt sunt dignissimos fuga provident, sed, porro, dolore consequuntur labore illum maiores hic.<br /><br />
                Culpa fugiat perspiciatis rem quasi reiciendis ex nostrum voluptas dicta sequi laborum cumque aliquid, magni assumenda incidunt atque qui nihil itaque distinctio, adipisci, quae magnam odio praesentium possimus! Quo, reiciendis.<br /><br />
                Corrupti esse eius recusandae reprehenderit voluptate quae nesciunt laborum unde odio, nobis nam nisi consequatur nulla delectus et exercitationem laudantium, officiis atque expedita deserunt laboriosam perspiciatis animi. Eos, repellendus obcaecati?<br /><br />
                Minima commodi magni, quae rerum sint ex consequatur sit laudantium natus molestias sequi, officiis animi voluptatem cumque, eum provident suscipit incidunt aliquid saepe! Eligendi autem aliquid accusantium temporibus, suscipit iste!<br /><br />
              </Text>
            </Box>
            <Button
              height='auto'
              maxWidth='max-content'
              whiteSpace='break-spaces'
              paddingY={{ base: '5', sm: '10' }}
              onClick={() => { window.location.hash = 'contact' }}
              as={motion.button}
              whileHover={noAnim ? undefined : { scale: 0.8 }}
            >
              Visit the website!
            </Button>
          </Flex>
        </Box >
      </Flex >
    </Box >
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