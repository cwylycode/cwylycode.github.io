import { Box, Flex } from "@chakra-ui/react"
import { motion, Variants } from "framer-motion"
import WavePage from '../svg/wave_page.svg'

interface Props {
  active: boolean,
  onAnimComplete: () => void,
  animSpeed: number
}

export default function OverlayPageChange({ active, onAnimComplete, animSpeed }: Props) {
  const animLeft: Variants = {
    active: { x: '0%', transition: { duration: `${animSpeed}`, ease: 'linear' } },
    inactive: { x: '-100%', transition: { duration: 0 } }
  }
  const animRight: Variants = {
    active: { x: '0%', transition: { duration: `${animSpeed}`, ease: 'linear' } },
    inactive: { x: '100%', transition: { duration: 0 } },
  }
  return (
    <>
      <Flex
        as={motion.div}
        id='page-overlay-left'
        variants={animLeft}
        initial={false}
        animate={active ? 'active' : 'inactive'}
        onAnimationComplete={onAnimComplete}
        position='fixed'
        top='0px'
        left={{ base: '0px', md: '52' }}
        width='calc(100% + 300px)'
        height='100%'
        zIndex='1'
      >
        <Box flexGrow='1' backgroundColor='themed.primary' />
        <Box
          width='300px'
          backgroundColor='themed.primary'
          css={{
            maskImage: `url(${WavePage})`,
            maskSize: '100% 100%'
          }}
        />
      </Flex>
      <Flex
        as={motion.div}
        id='page-overlay-right'
        variants={animRight}
        animate={active ? 'active' : 'inactive'}
        initial={false}
        position='fixed'
        top='0px'
        right='0px'
        width='calc(100% + 300px)'
        height='100%'
        zIndex='1'
      >
        <Box
          transform='rotate(180deg)'
          width='300px'
          backgroundColor='themed.primary'
          css={{
            maskImage: `url(${WavePage})`,
            maskSize: '100% 100%'
          }}
        />
        <Box flexGrow='1' backgroundColor='themed.primary' />
      </Flex>
    </>
  )
}