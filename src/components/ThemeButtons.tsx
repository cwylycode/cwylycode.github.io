import {
  Box,
  BoxProps,
  Flex,
  Icon,
  useRadio,
  useRadioGroup
} from "@chakra-ui/react"
import { Dispatch, SetStateAction } from "react"

import {
  BsMoonFill,
  BsQuestionLg,
  BsSunFill,
  BsTerminalFill
} from "react-icons/bs"

interface ThemeProps extends BoxProps {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}

export default function ThemeButtons({ theme, setTheme, ...props }: ThemeProps) {
  const options = [
    { name: 'light', icon: BsSunFill, color: 'yellow.200', glow: '#fff346' },
    { name: 'dark', icon: BsMoonFill, color: 'cyan.300', glow: '#00a9fb' },
    { name: 'hacker', icon: BsTerminalFill, color: 'green.300', glow: '#049304' },
    { name: 'random', icon: BsQuestionLg, color: 'pink.200', glow: '#f9a0ac' }
  ]

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'themebtns',
    defaultValue: theme,
    onChange: setTheme,
    value: theme
  })

  return (
    <Flex
      {...props}
      {...getRootProps()}
      justifyContent='center'
      alignItems='center'
      my='2'
    >
      {options.map((item) => {
        const radio = getRadioProps({ value: item.name })
        return (
          <RadioButton key={item.name} optionItem={item} {...radio} />
        )
      })}
    </Flex>
  )

  function RadioButton(props: any) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
    const input = getInputProps()
    const checkbox = getCheckboxProps()
    return (
      <Box as='label'>
        <input {...input} />
        <Box
          {...checkbox}
          px='2'
          py='2'
          mx='1'
          cursor='pointer'
          borderRadius='lg'
          bgColor='gray.700'
          _checked={{
            borderColor: 'gray.500',
            borderWidth: '3px',
            svg: {
              filter: `drop-shadow(0 0 3px ${props.optionItem.glow})`
            }
          }}
        >
          <Icon
            as={props.optionItem.icon}
            color={props.optionItem.color}
            fontSize='16px'
            display='block'
          />
        </Box>
      </Box>
    )
  }
}