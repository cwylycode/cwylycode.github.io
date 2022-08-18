import { usePrefersReducedMotion } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { SvgContainer, SvgContainerProps } from "../SvgContainer";

export default function SvgDoodleStarGuy({ ...props }: SvgContainerProps) {
  const noAnim = usePrefersReducedMotion()
  return (
    <SvgContainer variant='themed' svgStrokeDashArray="5" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="doodle_starguy"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="0 0 300 300"
      >
        <path
          id="doodle_starguy-u-body"
          fill="none"
          stroke="#101010"
          d="M0-199.408l73.107 90.99L189.648-61.62 117.21 42.174v119.15L0 132.353l-117.209 28.971V42.174l-72.44-103.794 111.29-46.797L0-199.407z"
          transform="matrix(.7669 0 0 .7669 150 165.06)"
        ></path>
        <path
          id="doodle_starguy-u-mouth"
          fill="none"
          stroke="#3f5787"
          strokeWidth="0.6"
          d="M89.906 161.817c10.631-18.728-5.829 17.458 60.094 17.458s52.799-37.75 63.451-17.458-7.386 59.087-63.451 59.087-70.725-40.359-60.094-59.087z"
        ></path>
        <path
          id="doodle_starguy-u-eye_r"
          fill="#050505"
          d="M-17.457 0c0-9.641 7.816-17.457 17.457-17.457S17.457-9.641 17.457 0c0 4.712-7.982 1.772-16.51 1.878-8.92.111-18.404 3.051-18.404-1.878z"
          transform="translate(123.478 139.698) scale(.83352)"
        ></path>
        <path
          id="doodle_starguy-u-eye_l"
          fill="#050505"
          d="M-17.457 0c0-9.641 7.816-17.457 17.457-17.457S17.457-9.641 17.457 0c0 4.588-7.548 1.643-15.835 1.865-9.13.244-19.08 3.189-19.08-1.865z"
          transform="translate(178.536 139.698) scale(.83352)"
        ></path>
        <g
          id="doodle_starguy-u-teeth"
          fill="none"
          stroke="#3f5787"
          strokeWidth="0.6"
        >
          <path
            id="doodle_starguy-s-path1"
            d="M93.263 157.789c-3.357 54.386 115.488 53.715 115.488 0"
          ></path>
          <path
            id="doodle_starguy-s-path2"
            d="M100.673 164.568c-3.672 2.204-9.668 5.686-13.639 7.275"
          ></path>
          <path
            id="doodle_starguy-s-path3"
            d="M110.069 172.146c-5.475 7.04-12.996 15.183-20.163 20.558"
          ></path>
          <path
            id="doodle_starguy-s-path4"
            d="M120.374 176.086c-4.403 11.009-9.571 21.87-14.851 32.43"
          ></path>
          <path
            id="doodle_starguy-s-path5"
            d="M135.832 178.51c0 12.136-2.769 28.391-5.153 40.312"
          ></path>
          <path
            id="doodle_starguy-s-path6"
            d="M156.14 179.42c1.716 12.015 5.199 29.33 7.576 41.22"
          ></path>
          <path
            id="doodle_starguy-s-path7"
            d="M174.325 176.995c8.242 9.616 14.398 20.763 23.338 29.703"
          ></path>
          <path
            id="doodle_starguy-s-path8"
            d="M190.995 170.933c6.628 4.42 15.458 13.033 22.126 16.67"
          ></path>
          <path
            id="doodle_starguy-s-path9"
            d="M200.694 165.175c3.677 1.47 11.279 5.263 15.179 6.043"
          ></path>
        </g>
        <motion.g
          id="doodle_starguy-u-brows"
          fill="#0f1010"
          strokeWidth="0"
          initial={noAnim ? undefined : { translateY: 0 }}
          animate={noAnim ? undefined : { translateY: -26.858 }}
          transition={{ duration: 0.12, repeat: Infinity, repeatType: "mirror" }}
        >
          <path
            id="doodle_starguy-u-brow_right"
            d="M-24.076 11.432C-25.841 9.648-21.082 1.38-8.035-2.043s26.84.31 26.737 2.78-5.47-2.991-22.897.826-18.446 11.195-19.881 9.87z"
            transform="translate(118.41 113.587)"
          ></path>
          <path
            id="doodle_starguy-u-brow_left"
            d="M-24.076 11.432C-25.841 9.648-21.082 1.38-8.035-2.043s26.84.31 26.737 2.78-5.47-2.991-22.897.826-18.446 11.195-19.881 9.87z"
            transform="matrix(-1 0 0 1 181.59 113.587)"
          ></path>
        </motion.g>
      </svg>
    </SvgContainer>
  )
}