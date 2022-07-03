import { chakra } from "@chakra-ui/react";
import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles';
import useRandomRgb from "../hooks/use-random-rgb";
import useThemed from "../hooks/use-themed";

const ChakraParticles = chakra(Particles)

export default function ParticlesNav() {
  const particleColor = useThemed({
    light: '#138c42',
    dark: '#63b3ed',
    hacker: '#007f00',
    random: useRandomRgb()
  })
  return (
    <ChakraParticles
      position='absolute'
      id="particles-nav"
      init={loadFull}
      options={{
        // no pauseOnBlur needed to prevent particles from freezing in place when switching browser tabs
        pauseOnBlur: false,
        fullScreen: false,
        fpsLimit: 60,
        retina_detect: true,
        interactivity: {
          detectsOn: "window",
          events: {
            onhover: {
              enable: true,
              mode: "trail",
            },
            resize: true
          },
          modes: {
            trail: {
              delay: 0.01,
              quantity: 5
            }
          }
        },
        particles: {
          number: {
            value: 0,
            limit: 500
          },
          color: {
            value: particleColor,
          },
          shape: {
            stroke: {
              width: 1
            },
            type: "line",
          },
          opacity: {
            value: 1,
          },
          size: {
            value: 20,
            random: {
              enable: true,
              minimumValue: 5
            },
            animation: {
              enable: true,
              speed: 100,
              minimumValue: 5,
              sync: false,
              startValue: "min",
              destroy: "max"
            }
          },
          rotate: {
            value: 90,
            direction: 'clockwise'
          },
          move: {
            enable: true,
            speed: 20,
            direction: "bottom",
            random: false,
            straight: false,
            outMode: "destroy",
          }
        }
      }}
    />
  )
}