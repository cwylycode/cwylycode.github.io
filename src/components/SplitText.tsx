// PROBABLY DEPRECATED

import { Text, TextProps } from "@chakra-ui/react";
import { MotionProps } from "framer-motion";

type MProps = Omit<MotionProps,
  'style' |
  'onAnimationStart' |
  'onDrag' |
  'onDragStart' |
  'onDragEnd' |
  'transition'
>

interface Props extends TextProps, MProps {
  text: string
}

export default function SplitText({ text, ...props }: Props) {
  return (
    <>
      {
        text.split('').map((c, i) => {
          if (c === '\n') return (<br key={i} />)
          return <Text key={i} {...props} >{c}</Text>
        })
      }
    </>
  )
}