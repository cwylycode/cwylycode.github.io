import { Box, usePrefersReducedMotion } from '@chakra-ui/react'
import { motion, useAnimation, useCycle } from 'framer-motion'
import { useEffect } from 'react'
import * as SvgLogos from './svg/SvgLogos'

const LogoProps = {
  variant: 'logos',
  height: '100%'
}
const logos = [
  <SvgLogos.SvgLogoSmile {...LogoProps} />,
  <SvgLogos.SvgLogoTeeth {...LogoProps} />,
  <SvgLogos.SvgLogoCute {...LogoProps} />,
  <SvgLogos.SvgLogoHorror {...LogoProps} />,
  <SvgLogos.SvgLogoTongue {...LogoProps} />,
  <SvgLogos.SvgLogoWhistle {...LogoProps} />,
  <SvgLogos.SvgLogoCyclops {...LogoProps} />,
  <SvgLogos.SvgLogoWacky {...LogoProps} />,
  <SvgLogos.SvgLogoEvil {...LogoProps} />,
  <SvgLogos.SvgLogoHtml {...LogoProps} />,
]
const START_DELAY = 5
const REPEAT_DELAY = 3
const CHANGE_DELAY = 3

export default function HomeLogo({ ...props }) {
  const [currentLogo, cycleLogos] = useCycle(...logos)
  const animation = useAnimation()
  const noAnim = usePrefersReducedMotion()

  useEffect(() => {
    const timer = setTimeout(() => {
      startAnim()
    }, START_DELAY * 1000);
    return () => clearTimeout(timer)
  }, [noAnim])

  function startAnim() {
    if (noAnim) return
    animation.start({
      rotate: [
        '0deg',
        '-30deg',
        `${360 * 4 + 30}deg`,
        `${360 * 4}deg`
      ],
      transition: {
        delay: REPEAT_DELAY,
        duration: 6,
        ease: 'anticipate',
        times: [0, 0.4, 0.6, 1]
      }
    })
  }

  return (
    <Box
      as={motion.div}
      animate={noAnim ? undefined : animation}
      onAnimationStart={() => {
        setTimeout(() => {
          cycleLogos()
        }, 1000 * (REPEAT_DELAY + CHANGE_DELAY));
      }}
      onAnimationComplete={startAnim}
      aria-label='HOME'
      {...props}
    >
      {currentLogo}
    </Box>
  )
}