import { chakra, usePrefersReducedMotion } from "@chakra-ui/react";
import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles'
import useRandomRgb from "../hooks/use-random-rgb";
import useThemed from "../hooks/use-themed";

const ChakraParticles = chakra(Particles)

interface Props {
  show: boolean
}
export default function ParticlesExplosion({ show }: Props) {
  const color1 = useThemed({
    light: '#68d391',
    dark: '#63b3ed',
    hacker: '#007f00',
    random: useRandomRgb()
  })
  const color2 = useThemed({
    light: '#00aa00',
    dark: '#0006ff',
    hacker: '#00ff00',
    random: useRandomRgb()
  })
  const color3 = useThemed({
    light: '#000',
    dark: '#fff',
    hacker: '#fff',
    random: useRandomRgb()
  })
  const colorTrailFill = useThemed({
    light: '#fff',
    dark: '#111',
    hacker: '#000',
    random: useRandomRgb()
  })

  if (usePrefersReducedMotion()) {
    return <></>
  } else {
    return (
      <ChakraParticles
        id="particles-explosion"
        display={show ? 'unset' : 'none'} //Needed, otherwise will draw over the home page
        init={loadFull}
        options={{
          autoPlay: show,
          particles: {
            number: {
              value: 100,
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.5,
                sync: false
              }
            },
            shape: {
              options: {
                polygon: [
                  {
                    sides: 3,
                    particles: {
                      size: {
                        value: 12,
                        random: {
                          enable: true,
                          minimumValue: 1
                        }
                      },
                      color: {
                        value: color3
                      }
                    }
                  },
                  {
                    sides: 6,
                    particles: {
                      size: {
                        value: 8,
                        random: {
                          enable: true,
                          minimumValue: 1
                        }
                      },
                      color: {
                        value: color2
                      }
                    }
                  },
                ],
                star: {
                  particles: {
                    size: {
                      value: 10,
                      random: {
                        enable: true,
                        minimumValue: 3
                      }
                    },
                    color: {
                      value: color1
                    }
                  }
                },
              },
              type: ["polygon", 'star']
            },
            size: {
              value: 10,
              random: true,
              animation: {
                enable: true,
                speed: 12,
                size_min: 5,
                sync: false
              }
            },
            rotate: {
              animation: {
                enable: true,
                speed: 200,
                sync: false,
              },
              direction: 'random',
              random: {
                enable: true,
                minimumValue: 100
              },
            },
            move: {
              enable: true,
              speed: 50,
              direction: "top",
              random: true,
              straight: false,
              outMode: "destroy",
              bounce: false,
              gravity: {
                enable: true,
                acceleration: 9.8,
              },
              path: {
                enable: true,
                delay: {
                  random: {
                    enable: true,
                    minimumValue: 0.5
                  },
                  value: 1
                },
                generator: 'perlinNoise'
              },
              trail: {
                enable: true,
                length: 5,
                fillColor: colorTrailFill
              },
              drift: {
                min: -20,
                max: 20
              }
            },
          },
          retina_detect: true,
          emitters: {
            autoPlay: true,
            startCount: 50,
            life: {
              duration: 0.01,
              count: 1
            },
            shape: 'circle',
            size: {
              height: 10,
              width: 10,
              mode: 'percent'
            },
            position: {
              x: 50,
              y: 50
            },
            particles: {
              opacity: {
                value: 0
              },
              shape: {
                type: 'circle',
                stroke: {
                  color: '#f00',
                  opacity: 1,
                  width: 3
                }
              }
            }
          }
        }}
      />
    )
  }
}