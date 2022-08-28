import { Box, useBreakpointValue, usePrefersReducedMotion } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles'
import type { RecursivePartial } from 'tsparticles/types/bundle'
import type { IOptions } from 'tsparticles/types/bundle'
// idea: use lazyload
export default function ParticlesPage({ pOptions }: { pOptions: RecursivePartial<IOptions> }) {
  const noAnim = usePrefersReducedMotion()
  const showParticles = useBreakpointValue({ base: false, md: true })
  return (
    <>
      {showParticles && !noAnim &&
        <Box
          id="page-particles"
          as={motion.div}
          initial={noAnim ? undefined : { opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 3 } }}
        >
          <Particles
            init={loadFull}
            options={pOptions}
          />
        </Box>
      }
    </>
  )
}