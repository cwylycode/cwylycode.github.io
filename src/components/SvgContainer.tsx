import { Box, BoxProps, useStyleConfig } from "@chakra-ui/react";

// Boiler-plate container for consistent svg rendering in a chakra box. Uses custom variants and styles.

// Children should be the contents of a jsx'd svg file

// Change preserveAspectRatio to none (needs viewBox) in svg markup if needed for matching exact dimensions of box div.

export interface SvgContainerProps extends BoxProps {
  variant?: 'none' | 'themed'
  svgStroke?: string
  svgStrokeWidth?: string
  svgFill?: string
}
export function SvgContainer({
  variant,
  svgStroke,
  svgStrokeWidth,
  svgFill,
  children,
  ...props
}: SvgContainerProps) {
  const css = (variant === 'themed') ? {
    '& path': {
      stroke: `${svgStroke ? svgStroke : 'themed.secondary'}`,
      strokeWidth: `${svgStrokeWidth ? svgStrokeWidth : '5'}`
    },
    '& [fill]:not([fill="none"])': {
      fill: `${svgFill ? svgFill : 'themed.secondary'}`
    }
  } : undefined
  return (
    <Box __css={{
      '& svg': {
        width: '100%',
        height: '100%',
      },
      ...css
    }}
      {...props}
    >
      {children}
    </Box>
  )
}