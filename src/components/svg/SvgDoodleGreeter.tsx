import { usePrefersReducedMotion } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { SvgContainer, SvgContainerProps } from "../SvgContainer";

export default function SvgDoodleGreeter({ ...props }: SvgContainerProps) {
  return (
    <SvgContainer variant='themed' {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="doodle_greeter"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="0 0 512 512"
      >
        <g
          id="doodle_greeter-u-doodle_greeter"
          transform="matrix(1.75237 0 0 1.75237 -6.64 -16.636)"
        >
          <path vectorEffect='non-scaling-stroke'
            id="doodle_greeter-u-body"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
            d="M41.26 142.401c1.645-5.482 2.124-14.243 8.058-16.786 11.084-4.75 92.627-5.687 104.073.672 13.542 7.523 10.772 105.38 2.686 115.488-8.545 10.682-33.942 6.509-46.33 8.057-11.213 1.402-73.745 12.535-79.9 2.686-16.606-26.568 27.382-81.333 9.4-112.802"
          ></path>
          <path vectorEffect='non-scaling-stroke'
            id="doodle_greeter-u-leg_r"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
            d="M65.433 255.875c-8.504 3.645-18.809 6.06-23.5 15.443-2.787 5.573 3.487 14.295.67 18.8-2.287 3.66-18.906 3.534-23.5 5.372"
          ></path>
          <path vectorEffect='non-scaling-stroke'
            id="doodle_greeter-u-leg_l"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
            d="M111.09 249.832c34.252 9.786 19.596 26.982 26.187 33.572 2.5 2.5 19.53 1.466 23.5.672"
          ></path>
          <path vectorEffect='non-scaling-stroke'
            id="doodle_greeter-u-arm_r"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
            d="M42.268 178.718c-3.393 0-10.805-3.225-13.429-2.014-16.03 7.398-15.34 31.044-18.129 44.986"
          ></path>
          <motion.path
            id="doodle_greeter-u-arm_l"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
            d="M162.442 185.013c30.356-6.295 29.946-19.493 29.946-37.898"
            animate={usePrefersReducedMotion() ? {} : {
              d: [
                "M162.442 185.013c30.356-6.295 29.946-19.493 29.946-37.898",
                'M162.442 185.013c27.427-3.148 31.37 0 51.386-6.295'
              ]
            }}
            transition={{ repeat: Infinity, repeatType: "mirror" }}
          ></motion.path>
          <g id="doodle_greeter-u-face" transform="translate(-35.888 49.071)">
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-u-eye_r"
              fill="#0c0c0c"
              d="M1.666 5.946a4.28 4.28 0 118.56 0 4.28 4.28 0 01-8.56 0z"
              transform="translate(113.192 117.154)"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-u-eye_l"
              fill="#0c0c0c"
              d="M1.666 5.946a4.28 4.28 0 118.56 0 4.28 4.28 0 01-8.56 0z"
              transform="translate(146.957 117.154)"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-u-mouth"
              fill="none"
              stroke="#3f5787"
              strokeWidth="3"
              d="M130.913 148.486c9.59 0 13.16-3.558 19.76-1.358 1.362.454.95 6.311.828 7.04-2.653 15.918-24.803 26.556-36.44 12.008-6.105-7.63-4.464-22.07-2.333-20.29s8.595 2.6 18.185 2.6z"
            ></path>
          </g>
          <g
            id="doodle_greeter-u-hair"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
            transform="translate(-35.888 49.071)"
          >
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-s-path1"
              d="M89.5 75.522c-4.199-6.065-9.444-11.346-13.184-17.578"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-s-path2"
              d="M102.683 75.522c-3.34-5.568-6.242-9.623-7.324-16.113"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-s-path3"
              d="M112.937 74.79c1.982-4.627 3.99-9.243 5.859-13.916"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-s-path4"
              d="M128.317 74.79c.911-8.198.176-15.996-.732-24.17"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-s-path5"
              d="M137.106 74.057c-1.294-6.471-2.17-12.398-5.127-18.31"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-s-path6"
              d="M143.698 74.057c3.442-6.886 4.508-11.055 11.718-15.38"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-s-path7"
              d="M156.149 74.79c4.056-5.41 7.96-10.793 10.986-16.846"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-s-path8"
              d="M171.53 75.522c.814-5.702-.325-13.412 5.858-14.648"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-s-path9"
              d="M181.05 76.254c4.439-4.439 5.86-7.67 5.86-13.916"
            ></path>
          </g>
          <g
            id="doodle_greeter-u-text"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
            transform="scale(1.48913) rotate(9.898 208.934 -194.186)"
          >
            <path vectorEffect='non-scaling-stroke' id="doodle_greeter-s-path10" d="M114.401 30.113v19.042"></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-s-path11"
              d="M114.16 40.698c3.865-.773 7.64 0 11.51 0"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-s-path12"
              d="M125.67 31.557c.367 5.86-.135 11.85 1.017 17.605"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-s-path13"
              d="M137.52 38.667c.342 3.074.748 6.108 1.355 9.14"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-s-path14"
              d="M137.182 32.911c-7.154 1.022-.736 4.756 0 .339l.338-2.032"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-s-path15"
              d="M165.96 33.25c-.934 7.466-1.355 14.468-1.355 22.006"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-s-path16"
              d="M157.157 42.39c4.448 0 8.8.678 13.204.678"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-s-path17"
              d="M175.44 36.974c0 6.142.676 12.175.676 18.282"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-s-path18"
              d="M175.1 47.808c3.547-8.867 9.142 1.921 9.142 6.432"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-s-path19"
              d="M188.643 49.839c8.026-1.147 5.909-8.617 2.37-5.078-2.59 2.59 2.86 14.068 7.448 9.48"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-s-path20"
              d="M203.878 54.917c0-4.117.687-7.392 0-11.51"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-s-path21"
              d="M203.54 48.485c2.094-1.257 4.48-1.793 6.77-2.709"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-s-path22"
              d="M214.035 50.516c5.245.75 11.302-5.865 5.078-7.11-3.39-.678-5.946 16.598 3.386 12.866"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-s-path23"
              d="M234.687 39.682c-.81 4.048.339 8.11.339 12.188"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_greeter-s-path24"
              d="M235.026 54.917c-3.57.714-.06 4.026.677.339"
            ></path>
          </g>
          <path vectorEffect='non-scaling-stroke'
            id="doodle_greeter-s-path25"
            fill="none"
            stroke="#3f5787"
            strokeWidth="3"
            d="M167.036 124.436c12.568-12.568 16.182-18.955 18.694-36.538"
          ></path>
        </g>
      </svg>
    </SvgContainer>
  )
}