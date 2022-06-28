import { Box, BoxProps, useStyleConfig } from "@chakra-ui/react";

// Boiler-plate container for consistent svg rendering in a chakra box. Uses custom variants and styles.

// Children should be the contents of a jsx'd svg file

// Change preserveAspectRatio to none (needs viewBox) in svg markup if needed for matching exact dimensions of box div.

export interface SvgContainerProps extends BoxProps {
  variant?: string | (string & {})
}
export function SvgContainer({ variant, children, ...props }: SvgContainerProps) {
  const styles = useStyleConfig('SvgContainer', { variant })
  return (
    <Box __css={{ ...styles }} {...props}>
      {children}
    </Box>
  )
}