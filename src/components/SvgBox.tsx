import { Box, BoxProps, CSSObject } from "@chakra-ui/react";
import { ReactNode } from "react";

// Change preserveAspectRatio to none (needs viewBox) in SVG files if needed for matching exact dimensions.

interface SvgBoxProps extends BoxProps {
  svgComp: ReactNode
  svgPathCSS?: CSSObject
}

export default function SvgBox({ svgComp, svgPathCSS, ...props }: SvgBoxProps) {
  return (
    <Box
      fill='themed.secondary'
      {...props}
      sx={{
        '& > svg': {
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          maxHeight: '100%',
          '& path': { ...svgPathCSS }
        },
      }}
    >
      {svgComp}
    </Box>
  )
}