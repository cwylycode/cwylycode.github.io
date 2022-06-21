import { Box, chakra } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";

const AnimBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children'
})

interface OtcProps {
  active: boolean,
  animSpeed: number
}

export default function OverlayThemeChange({ active, animSpeed }: OtcProps) {
  const anim = {
    active: {
      y: '150vh',
      transition: { duration: `${animSpeed}`, ease: 'linear' }
    },
    inactive: {
      y: '-150vh',
      transition: { duration: 0 }
    }
  }
  return (
    <>
      <AnimBox
        variants={anim}
        animate={active ? 'active' : 'inactive'}
        position='fixed'
        top='-25vh'
        width='100vw'
        height='150vh'
        zIndex='10000'
      >
        <Box
          id='theme-overlay-top'
          backgroundColor='black'
          width='100%'
          height='50%'
          transform={`rotate(180deg)`}
          __css={{
            mask: "linear-gradient(#000 0 0) 100% calc(50% - 100px) no-repeat,url('/src/svg/wave_theme.svg') bottom/70% 100px repeat-x"
          }}
        />
        <Box
          id='theme-overlay-bottom'
          backgroundColor='black'
          width='100%'
          height='50%'
          __css={{
            mask: "linear-gradient(#000 0 0) 100% calc(50% - 100px) no-repeat,url('/src/svg/wave_theme.svg') bottom/70% 100px repeat-x"
          }}
        />
      </AnimBox>
    </>
  )
}