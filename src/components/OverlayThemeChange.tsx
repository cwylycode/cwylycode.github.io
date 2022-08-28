import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import WaveTheme from '../svg/wave_theme.svg'

interface Props {
  active: boolean,
  onAnimComplete: () => void,
  animSpeed: number
}

export default function OverlayThemeChange({ active, onAnimComplete, animSpeed }: Props) {
  return (
    <Flex
      id="theme-overlay"
      as={motion.div}
      variants={{
        active: {
          y: ['-150vh', '0vh'],
          transition: { duration: `${animSpeed}`, ease: 'linear' }
        },
        inactive: {
          y: ['0vh', '150vh'],
          transition: { duration: `${animSpeed}`, ease: 'linear' }
        }
      }}
      initial={false}
      animate={active ? 'active' : 'inactive'}
      onAnimationComplete={onAnimComplete}
      direction='column'
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
        height='25vh'
        transform='rotate(180deg)'
        css={{
          maskImage: `url(${WaveTheme})`,
          maskSize: '200px 100%'
        }}
      />
      <Box
        id='theme-overlay-body'
        flexGrow={1}
        backgroundColor='black'
      />
      <Box
        id='theme-overlay-bottom'
        backgroundColor='black'
        width='100%'
        height='25vh'
        css={{
          maskImage: `url(${WaveTheme})`,
          maskSize: '200px 100%'
        }}
      />
    </Flex>
  )
}