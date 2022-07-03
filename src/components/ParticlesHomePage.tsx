import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import useRandomRgb from "../hooks/use-random-rgb";
import useThemed from "../hooks/use-themed";

export default function ParticlesHomePage() {
  const particleColor = useThemed({
    light: '#68d391',
    dark: '#63b3ed',
    hacker: '#007f00',
    random: useRandomRgb()
  })
  const lineColor = useThemed({
    light: '#050505',
    dark: '#777777',
    hacker: '#006600',
    random: useRandomRgb()
  })
  return (
    <Particles
      id="particles-home"
      init={loadSlim}
      options={{
        particles: {
          number: {
            value: 64,
            density: {
              enable: true,
              value_area: 1200
            }
          },
          color: {
            value: particleColor
          },
          shape: {
            type: "star",
            polygon: {
              nb_sides: 5
            },
          },
          opacity: {
            value: 0.75,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 12,
              size_min: 1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: lineColor,
            opacity: 0.5,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "bubble"
            },
            onclick: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 200,
              size: 10,
              duration: 3,
            },
            repulse: {
              distance: 500,
              duration: 0.5,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
    />
  )
}