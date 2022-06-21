import { chakra } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";

const AnimBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children'
})

interface OpcProps {
  active: boolean,
  animSpeed: number
}

export default function OverlayPageChange({ active, animSpeed }: OpcProps) {
  const animLeft = {
    active: {
      x: '0%',
      transition: { duration: `${animSpeed}` }
    },
    inactive: {
      x: '-100%',
      transition: { duration: 0, ease: 'linear' }
    }
  }
  const animRight = {
    active: {
      x: '0%',
      rotate: '180deg',
      transition: { duration: `${animSpeed}` }
    },
    inactive: {
      x: '100%',
      rotate: '180deg',
      transition: { duration: 0, ease: 'linear' }
    },
  }
  return (
    <>
      <AnimBox
        id='page-overlay-left'
        variants={animLeft}
        animate={active ? 'active' : 'inactive'}
        position='fixed'
        width='100%'
        height='100%'
        zIndex='1'
        backgroundColor='green'
        __css={{
          mask: "linear-gradient(#000 0 0) left/calc(100% - 200px) 100% no-repeat,url('/src/svg/wave_page.svg') no-repeat 100%"
        }}
      />
      <AnimBox
        id='page-overlay-right'
        variants={animRight}
        animate={active ? 'active' : 'inactive'}
        position='fixed'
        width='100%'
        height='100%'
        zIndex='1'
        backgroundColor='green'
        __css={{
          mask: "linear-gradient(#000 0 0) left/calc(100% - 200px) 100% no-repeat,url('/src/svg/wave_page.svg') no-repeat 100%"
        }}
      />
    </>
  )
}