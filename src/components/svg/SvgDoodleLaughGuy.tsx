import { usePrefersReducedMotion } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { SvgContainer, SvgContainerProps } from "../SvgContainer";

export default function SvgDoodleLaughGuy({ ...props }: SvgContainerProps) {
  return (
    <SvgContainer variant='themed' {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="doodle_laughguy"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="0 0 300 300"
      >
        <g
          id="doodle_laughguy-u-body"
          fill="none"
          stroke="#3f5787"
          strokeWidth="0.6"
          transform="translate(2.686 23.5)"
        >
          <g
            id="doodle_laughguy-u-face"
            transform="rotate(-40.969 126.399 -8.06) scale(.46332)"
          >
            <path vectorEffect='non-scaling-stroke'
              id="doodle_laughguy-s-path1"
              d="M81.177 83.93l44.987 21.486-44.315 28.2"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_laughguy-u-copy-of-path"
              d="M218.823 83.93l-44.987 21.486 44.315 28.2"
            ></path>
            <path vectorEffect='non-scaling-stroke' id="doodle_laughguy-s-path2" d="M126.164 105.416H81.849"></path>
            <path vectorEffect='non-scaling-stroke'
              id="doodle_laughguy-u-copy-of-path2"
              d="M173.836 105.416h44.315"
            ></path>
            <motion.path vectorEffect='non-scaling-stroke'
              id="doodle_laughguy-u-mouth"
              d="M83.945 161.817c6.043-5.65 47.026 25.344 68.151 25.515s60.094-28.297 64.123-22.829-7.386 95.345-64.123 95.345-74.194-92.38-68.151-98.03z"
              animate={usePrefersReducedMotion() ? {} : {
                d: [
                  "M83.945 161.817c6.043-5.65 47.026 25.344 68.151 25.515s60.094-28.297 64.123-22.829-7.386 95.345-64.123 95.345-74.194-92.38-68.151-98.03z",
                  "M81.848703,163.831692c6.04297-5.650128,47.026569,25.343635,68.151297,25.514772s60.094001-28.297483,64.122649-22.829007-27.418566,45.491389-62.062593,45.559627-76.254323-42.595264-70.211353-48.245392z"
                ]
              }}
              transition={{ duration: 0.15, repeat: Infinity, repeatType: "mirror" }}
            ></motion.path>
          </g>
          <path vectorEffect='non-scaling-stroke'
            id="doodle_laughguy-s-path3"
            d="M54.991 46.33C52.589 27.113 83.68-3.54 98.635 11.414c5.951 5.951-1.512 22.743-6.043 17.457-5.279-6.158 11.09-15.916 15.443-16.786 11.298-2.26 24.135 6.714 24.172 6.714 5.603 0 14.454-16.563 34.243-10.743 8.32 2.448 12.06 5.935 14.1 14.1.277 1.108-.454 3.17.672 3.358 7.664 1.277 20.873-6.637 28.872 4.028 11.774 15.7-4.029 27.809-4.029 30.215 0 5.737 11.092 3.272 16.115 6.043 6.325 3.49 16.783 10.066 20.143 16.786 2.252 4.505 3.469 17.691-.671 21.486-1.937 1.776-8.65 5.728-11.415 6.715-1.282.458-4.845-.418-4.028.671 5.893 7.858 28.373 17.111 20.814 32.23-4.968 9.936-12.671 14.071-22.829 17.457-2.583.86-7.523-1.327-8.057 1.343-2.019 10.092 8.914 24.182 2.014 34.915-5.889 9.16-41.63 8.352-41.63-.672 0-5.38 9.89-3.433 11.415 0 3.196 7.19-20.953 19.707-26.186 20.144-6.892.574-42.883-8.914-32.9-20.144 2.918-3.282 17.014-3.568 18.8 1.343 3.995 10.987-33.599 10.122-40.287 8.729-16.114-3.357-35.481-11.835-42.3-28.2-.327-.785-1.91-6.044 1.343-6.044 3.8 0 11.765 16.72 6.043 18.8-9.312 3.387-25.587-6.107-32.23-12.085-15.827-14.244 23.64-32.48 8.058-46.33-8.92-7.929-24.363-8.135-30.215-20.814-5.272-11.422 15.475-19.922 16.114-28.872.638-8.923-26.011-29.033-14.1-34.244 19.101-8.357 25.398 15.916 22.83 17.458-4.52 2.712-15.565-1.949-20.144-3.358-1.152-.354-4.08-.378-3.357-1.342 6.144-8.193 26.273-11.951 35.586-15.444"
          ></path>
          <path vectorEffect='non-scaling-stroke'
            id="doodle_laughguy-s-path4"
            d="M140.936 214.19c2.085 12.513.916 44.02 9.4 53.715 2.89 3.303 11.109.672 14.771.672"
          ></path>
          <path vectorEffect='non-scaling-stroke'
            id="doodle_laughguy-s-path5"
            d="M119.45 209.49c0 17.354.384 35.097-1.343 52.372-.138 1.378-.268 5.748 1.342 6.715 3.372 2.022 10.459.728 14.1 0"
          ></path>
          <path vectorEffect='non-scaling-stroke'
            id="doodle_laughguy-s-path6"
            d="M256.746 23.123c4.697-8.051 10.01-13.689 15.702-20.804"
          ></path>
          <path vectorEffect='non-scaling-stroke'
            id="doodle_laughguy-s-path7"
            d="M260.28 17.235c11.333 0 1.22 19.54-3.926 6.673"
          ></path>
          <path vectorEffect='non-scaling-stroke'
            id="doodle_laughguy-s-path8"
            d="M215.313 64.938c15.782-10.521 32.489-25.947 42.3-42.3"
          ></path>
          <path vectorEffect='non-scaling-stroke'
            id="doodle_laughguy-s-path9"
            d="M157.525 161.367c3.266-2.116 8.196-5.492 11.292-7.869"
          ></path>
          <path vectorEffect='non-scaling-stroke'
            id="doodle_laughguy-s-path10"
            d="M157.275 161.163c.808-4.356 1.658-7.983 3.057-12.13"
          ></path>
          <path vectorEffect='non-scaling-stroke'
            id="doodle_laughguy-s-path11"
            d="M156.85 161.46c5.454 2.443 5.482 1.622 11.539 1.72"
          ></path>
          <path vectorEffect='non-scaling-stroke'
            id="doodle_laughguy-s-path12"
            d="M97.686 143.688c6.967 24.779 34.52 31.203 60.11 17.458"
          ></path>
        </g>
      </svg>
    </SvgContainer>
  )
}