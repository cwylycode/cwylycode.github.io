import { Box } from "@chakra-ui/react";

export default function OverlayClickBlock() {
  return (
    <Box
      id="click-block-overlay"
      position='fixed'
      top='0px'
      width='100vw'
      height='100vh'
      zIndex='10000'
    />
  )
}