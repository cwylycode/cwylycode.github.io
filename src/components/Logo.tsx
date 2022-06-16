import { IconButton, IconButtonProps } from '@chakra-ui/react'
import { ReactComponent as LogoGraphic } from '../svg/placeholder.svg'

export default function Logo({ ...props }: IconButtonProps) {
  return (
    <IconButton
      icon={<LogoGraphic />}
      margin='auto'
      variant='ghost'
      fill='themed.secondary'
      _hover={{}}
      sx={{
        '& > svg': {
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          maxHeight: '100%'
        }
      }}
      {...props}
    />
  )
}