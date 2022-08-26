import { Box } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import WaveTheme from '../svg/wave_theme.svg'

interface Props {
  active: boolean,
  onAnimComplete: () => void,
  animSpeed: number
}

export default function OverlayThemeChange({ active, onAnimComplete, animSpeed }: Props) {
  const anim: Variants = {
    active: {
      y: ['-150vh', '0vh'],
      transition: { duration: `${animSpeed}`, ease: 'linear' }
    },
    inactive: {
      y: ['0vh', '150vh'],
      transition: { duration: `${animSpeed}`, ease: 'linear' }
    }
  }
  return (
    <>
      <Box
        id="theme-overlay"
        as={motion.div}
        variants={anim}
        initial={false}
        animate={active ? 'active' : 'inactive'}
        onAnimationComplete={onAnimComplete}
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
            mask: `linear-gradient(#000 0 0) 100% calc(50% - 100px) no-repeat,url(${WaveTheme}) bottom/70% 100px repeat-x`
          }}
        />
        <Box
          id='theme-overlay-bottom'
          backgroundColor='black'
          width='100%'
          height='50%'
          __css={{
            mask: `linear-gradient(#000 0 0) 100% calc(50% - 100px) no-repeat,url(${WaveTheme}) bottom/70% 100px repeat-x`
          }}
        />
      </Box>
    </>
  )
}