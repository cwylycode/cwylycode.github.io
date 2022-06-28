import { Box, BoxProps } from '@chakra-ui/react'
import SvgLogo from './svg/SvgLogo'

export default function HomeLogo({ ...props }: BoxProps) {
  return (
    <Box aria-label='HOME' {...props}>
      <SvgLogo
        height='100%'
        fill='themed.secondary'
        sx={{
          '& path': {
            strokeWidth: '0px'
          }
        }}
      />
    </Box>
  )
}