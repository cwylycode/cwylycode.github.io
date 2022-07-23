import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";
import { SvgContainer, SvgContainerProps } from "../SvgContainer";

interface SvgIntroProps extends SvgContainerProps {
  onAnimEnd?: () => void
}
export default function SvgIntro({ onAnimEnd, ...props }: SvgIntroProps) {

  useEffect(() => {
    async function sequence() {
      await eyes.start(eyesAnim.active)
      await mouth.start(pathsAnim.active)
      await cheeks.start(pathsAnim.active)
      await outline.start(pathsAnim.active)
    }
    sequence()
  }, [])

  const eyes = useAnimation()
  const mouth = useAnimation()
  const cheeks = useAnimation()
  const outline = useAnimation()

  const eyesAnim: Variants = {
    inactive: { rx: 120, ry: 0 },
    active: { rx: 120, ry: 120, transition: { delay: 1, duration: 1 } }
  }
  const pathsAnim: Variants = {
    inactive: { pathLength: 0 },
    active: { pathLength: 1, transition: { delay: 0.2, duration: 0.5 } }
  }

  return (
    <SvgContainer
      variant="themed"
      svgStroke="themed.scheme"
      svgStrokeWidth="10"
      svgFill="themed.scheme"
      {...props}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="0 0 512 512"
      >
        <motion.path
          variants={pathsAnim}
          initial="inactive"
          animate={outline}
          onAnimationComplete={() => {
            setTimeout(() => {
              onAnimEnd ? onAnimEnd() : null
            }, 0.5 * 1000);
          }}
          fill="none"
          stroke="#000"
          strokeWidth="3"
          d="M256 26.328c126.845 0 229.672 102.827 229.672 229.672S382.845 485.672 256 485.672 26.328 382.845 26.328 256 129.155 26.328 256 26.328z"
        ></motion.path>
        <g fill="#050505" strokeWidth="0" transform="translate(0 -20.627)">
          <motion.ellipse
            variants={eyesAnim}
            animate={eyes}
            initial='inactive'
            rx="121.55"
            ry="121.55"
            transform="matrix(.34884 0 0 .34884 184.472 220.306)"
          ></motion.ellipse>
          <motion.ellipse
            variants={eyesAnim}
            animate={eyes}
            initial='inactive'
            rx="121.55"
            ry="121.55"
            transform="matrix(.35 0 0 .34884 327.528 220.306)"
          ></motion.ellipse>
        </g>
        <g fill="none" stroke="#3f5787" strokeWidth="3">
          <motion.path
            variants={pathsAnim}
            initial='inactive'
            animate={mouth}
            d="M256 333.032c54.344 0 112.439-7.344 112.439-7.344"></motion.path>
          <motion.path
            variants={pathsAnim}
            initial='inactive'
            animate={mouth}
            d="M256 333.032c-54.344 0-112.439-7.344-112.439-7.344"></motion.path>
          <motion.path
            variants={pathsAnim}
            initial='inactive'
            animate={cheeks}
            d="M122.21 280.853s29.439 24.693 17.232 57.182-34.588 32.488-34.588 32.488"></motion.path>
          <motion.path
            variants={pathsAnim}
            initial='inactive'
            animate={cheeks}
            d="M388.3 280.853s-29.439 24.693-17.231 57.182 34.587 32.488 34.587 32.488"></motion.path>
        </g>
      </motion.svg>
    </SvgContainer>
  )
}