import { SvgContainer, SvgContainerProps } from "../SvgContainer";

export default function SvgDoodleUnamused({ ...props }: SvgContainerProps) {
  return (
    <SvgContainer variant='themed' svgStrokeDashArray="4" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="0 0 512 512"
      >
        <path vectorEffect='non-scaling-stroke'
          fill="none"
          stroke="#3f5787"
          strokeWidth="2.271"
          d="M263.579 19.93c-42.25-3.25-90.905-16.299-132.174-2.542C45.122 46.148-.91 206.77 14.483 286.818 30.609 370.674 131.67 494.812 225.452 500.33c82.077 4.828 146.09-28.341 195.718-91.505C503.053 304.61 537.341 237.04 446.588 119.06c-47.1-61.23-135.725-58.455-190.634-104.213"
        ></path>
        <path vectorEffect='non-scaling-stroke'
          fill="none"
          stroke="#3f5787"
          strokeWidth="1.024"
          d="M163.761 330.659s10.305-16.675 32.742-15.66l173.517-1.015M169.44 374.15s9.875-21.109-7.181-43.706-39.377-17.941-39.377-17.941M139.329 151.11l104.198 1.07M302.308 152.18h114.355"
        ></path>
        <path vectorEffect='non-scaling-stroke'
          fill="none"
          stroke="#000"
          d="M-10.511 0c0-5.805 0-6.011 10.511-6.011S10.511-5.805 10.511 0 5.805 10.511 0 10.511-10.511 5.805-10.511 0z"
          transform="matrix(.35596 0 0 2.04964 240.89 164.502)"
        ></path>
        <path vectorEffect='non-scaling-stroke'
          fill="none"
          stroke="#000"
          d="M-10.511 0c0-5.805 0-6.011 10.511-6.011S10.511-5.805 10.511 0 5.805 10.511 0 10.511-10.511 5.805-10.511 0z"
          transform="matrix(.35596 0 0 2.04964 412.921 163.432)"
        ></path>
      </svg>
    </SvgContainer>
  )
}