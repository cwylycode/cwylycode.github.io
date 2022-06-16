import { Box } from "@chakra-ui/react";

interface OpcProps {
  active: boolean,
  animSpeed: number
}

export default function OverlayPageChange({ active, animSpeed }: OpcProps) {
  return (
    <>
      <Box
        id='page-overlay-left'
        position='fixed'
        width='100%'
        height='100%'
        zIndex='1'
        backgroundColor='themed.primary'
        transform={`translateX(${active ? '0%' : '-100%'})`}
        transition={`transform ${animSpeed}s linear`}
        __css={{
          mask: "linear-gradient(#000 0 0) left/calc(100% - 200px) 100% no-repeat,url('/src/svg/wave_page.svg') no-repeat 100%"
        }}
      />
      <Box
        id='page-overlay-right'
        position='fixed'
        width='100%'
        height='100%'
        zIndex='1'
        backgroundColor='themed.primary'
        transform={`translateX(${active ? '0%' : '100%'}) rotate(180deg)`}
        transition={`transform ${animSpeed}s linear`}
        __css={{
          mask: "linear-gradient(#000 0 0) left/calc(100% - 200px) 100% no-repeat,url('/src/svg/wave_page.svg') no-repeat 100%"
        }}
      />
    </>
  )
}