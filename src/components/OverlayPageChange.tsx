import { Box } from "@chakra-ui/react"
import { motion, Variants } from "framer-motion"
import WavePage from '../svg/wave_page.svg'

interface OpcProps {
  active: boolean,
  animSpeed: number
}

export default function OverlayPageChange({ active, animSpeed }: OpcProps) {
  const animLeft: Variants = {
    active: { x: '0%', transition: { duration: `${animSpeed}`, ease: 'linear' } },
    inactive: { x: '-100%', transition: { duration: 0 } }
  }
  const animRight: Variants = {
    active: { x: '0%', rotate: '180deg', transition: { duration: `${animSpeed}`, ease: 'linear' } },
    inactive: { x: '100%', rotate: '180deg', transition: { duration: 0 } },
  }
  return (
    <>
      <Box
        as={motion.div}
        id='page-overlay-left'
        variants={animLeft}
        animate={active ? 'active' : 'inactive'}
        initial={false}
        position='fixed'
        left={{ base: '0px', md: '-50px' }}
        width='100%'
        height='100%'
        zIndex='1'
        backgroundColor='themed.primary'
        __css={{
          mask: `linear-gradient(#000 0 0) left/calc(100% - 200px) 100% no-repeat,url(${WavePage}) no-repeat 100%`
        }}
      />
      <Box
        as={motion.div}
        id='page-overlay-right'
        variants={animRight}
        animate={active ? 'active' : 'inactive'}
        initial={false}
        position='fixed'
        width='100%'
        height='100%'
        zIndex='1'
        backgroundColor='themed.primary'
        __css={{
          mask: `linear-gradient(#000 0 0) left/calc(100% - 200px) 100% no-repeat,url(${WavePage}) no-repeat 100%`
        }}
      />
    </>
  )
}