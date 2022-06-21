import { BoxProps, chakra, } from "@chakra-ui/react";
import { isValidMotionProp, motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

const ChakraMotionDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children'
})

type MBoxProps = Omit<BoxProps, 'onAnimationStart|onDrag|onDragEnd|onDragStart|style|transition'> & MotionProps

interface MotionBoxProps extends MBoxProps {
  children?: ReactNode,
}
export default function MotionBox({ children, ...props }: MotionBoxProps) {
  return (
    <ChakraMotionDiv {...props}>
      {children}
    </ChakraMotionDiv>
  )
}