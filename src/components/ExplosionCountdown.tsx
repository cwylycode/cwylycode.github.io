import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SvgExplodeBubble from "./svg/SvgExplodeBubble";

const COUNT_DURATION = 0.5

export default function ExplosionCountdown({ onCountdownFinished }: { onCountdownFinished: () => void }) {
  return (
    <Box
      as={motion.div}
      variants={{
        inactive: {},
        active: { transition: { staggerChildren: COUNT_DURATION } }
      }}
      initial='inactive'
      animate='active'
      id='explode-countdown'
      position='fixed'
      top='0px'
      width='100%'
      height='100%'
      backgroundColor='blackAlpha.800'
      zIndex='10000'
    >
      {[3, 2, 1].map((val, i) =>
        <Heading
          key={i}
          as={motion.h2}
          // @ts-ignore
          transformTemplate={({ scale }) => `scale(${scale})`} //Needed to fix safari font blurry issue
          variants={{
            inactive: { opacity: 0, scale: 20 },
            active: {
              opacity: 1,
              scale: 5,
              transition: { type: 'spring', bounce: 0.6, duration: COUNT_DURATION },
              transitionEnd: { opacity: 0 }
            }
          }}
          position='absolute'
          top='50%'
          left='50%'
          color='white'
          marginTop='-2%'
          marginLeft='-2%'
        >
          {val}
        </Heading>
      )}
      <Box
        as={motion.div}
        variants={{
          inactive: { display: 'none' },
          active: {
            display: 'unset',
            y: [-5, 5],
            transition: { duration: 0.03, repeat: 15, repeatType: 'mirror' }
          }
        }}
        onAnimationComplete={onCountdownFinished}
        position='absolute'
        top='50%'
        left='50%'
        width='90vmin'
        height='90vmin'
        marginTop='-45vmin'
        marginLeft='-45vmin'
      >
        <SvgExplodeBubble />
      </Box>
    </Box>
  )
}