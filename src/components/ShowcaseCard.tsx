import { usePrefersReducedMotion, useDisclosure, useOutsideClick, Box, Flex, Button, IconButton, Text, Spacer, Image } from "@chakra-ui/react"
import { useScrollLock } from "@mantine/hooks"
import { motion, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { IoMdClose } from "react-icons/io"
import useThemed from "../hooks/use-themed"

export interface ShowcaseCardProps {
  title: string
  text: string
  img: string
  imgSize: number
  imgOffset: { x: number, y: number }
  link: string
  linkText: string
}
export default function ShowcaseCard({ ...props }: ShowcaseCardProps) {
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
      height='96'
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
        justifyContent='center'
        alignItems='center'
        position='relative'
        zIndex={zIndex}
        sx={isOpen ? {
          position: 'fixed',
          top: '0px',
          left: '0px',
        } : {}}
      >
        <Flex
          className="card"
          as={motion.div}
          onClick={isOpen ? undefined : openCard}
          ref={cardRef}
          layout
          position='relative'
          direction='column'
          border={useThemed({ default: undefined, hacker: '1px dashed' })}
          borderRadius='20'
          borderColor='themed.secondary'
          backgroundColor='themed.primary'
          overflow='hidden'
          width='100%'
          height='100%'
          cursor='pointer'
          css={{ WebkitMaskImage: '-webkit-radial-gradient(white,black)' }} // Needed for safari to render proper border radius using hidden overflow - because safari is bad.
          sx={isOpen ? {
            width: '24rem',
            height: '32rem',
            maxWidth: '90%',
            maxHeight: '90%',
            cursor: 'auto'
          } : {}}
        >
          <Box
            className="card-image"
            as={motion.div}
            layout
            position='relative'
            minHeight='150%'
            overflow='hidden'
            sx={isOpen ? {
              minHeight: '33%'
            } : {}}
          >
            <Image
              as={motion.img}
              layout
              position='absolute'
              width={`${props.imgSize || 500}px`}
              maxWidth='1000px'
              top={`-${props.imgOffset.y}px`}
              left={`-${props.imgOffset.x}px`}
              src={props.img}
            />
            <Box
              as={motion.div}
              layout
              position='absolute'
              width='100%'
              height='100%'
              bgGradient='linear(to-t, themed.primary 0%, blackAlpha.500 25%)'
            />
          </Box>
          <Box
            className="card-text"
            as={motion.div}
            layout
            overflow='auto'
            margin='5'
            minHeight='1px' //Prevents sudden disappearance when closing card
          >
            <Text as={motion.p} layout whiteSpace='pre-line'>{props.text}</Text>
          </Box>
          <Spacer />
          <Flex
            className="card-link"
            as={motion.div}
            layout
            direction='column'
            alignItems='center'
            justifyContent='center'
            paddingX='5'
            paddingBottom='5'
            minHeight='max-content'
          >
            <Button
              as={motion.a}
              layout
              whileHover={noAnim ? undefined : { scale: 0.9 }}
              whiteSpace='break-spaces'
              href={props.link}
              width='100%'
              textAlign='center'
            >
              {props.linkText}
            </Button>
          </Flex>
          <Text
            className="card-title"
            as={motion.p}
            layout='position'
            position='absolute'
            top='25px'
            left='5'
            paddingRight='15%'
            fontSize='3xl'
            color='white'
            textShadow='5px 5px 10px #000'
            sx={isOpen ? {
              top: '5%'
            } : {}}
          >
            {props.title}
          </Text>
          {isOpen && <IconButton
            className="card-close-button"
            variant='solid'
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
            _hover={{ backgroundColor: 'grey' }}
          />}
        </Flex >
      </Flex >
    </Box >
  )
}