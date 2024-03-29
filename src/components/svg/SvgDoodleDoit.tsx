import { SvgContainer, SvgContainerProps } from "../SvgContainer";

export default function SvgDoodleDoit({ ...props }: SvgContainerProps) {
  return (
    <SvgContainer variant='themed' {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="0 0 300 300"
      >
        <g fill="none" stroke="#3f5787" strokeWidth="3">
          <path vectorEffect='non-scaling-stroke'
            d="M79.163 35.586c1.204 15.658 1.343 31.986 1.343 47.673M77.82 38.272c27.862 3.096 40.578 45.658 2.014 45.658M126.835 53.044c-15.112 9.067-1.478 31.265 12.758 23.5 13.534-7.382-3.442-21.251-10.743-24.172M185.25 53.044c0 8.33.672 16.507.672 24.843M185.25 35.586c-10.081 6.05 1.503 10.358 0 1.343M208.08 34.915c0 14.112-1.428 29.12 1.343 42.972M193.98 51.701c7.886 0 15.584-1.343 23.5-1.343"
            transform="rotate(10.468 125.393 381.26)"
          ></path>
        </g>
        <path vectorEffect='non-scaling-stroke'
          fill="none"
          stroke="#3f5787"
          strokeWidth="0.808"
          d="M4.665 290.874h188.067M189.017 290.874C231.202 220.566 181 104.012 87.75 139.877c-8.54 3.285-20.196 8.141-26.221 15.37-5.002 6.003-8.176 14.18-9.946 21.701-9.754 41.454-29.684 73.784-46.113 112.117M112.518 215.536c13.07 5.228 23.78 2.242 36.167-2.713M83.132 222.785c31.558 12.623 65.943 10.164 94.938-7.233"
        ></path>
        <path vectorEffect='non-scaling-stroke'
          fill="none"
          stroke="#3f5787"
          strokeWidth="0.808"
          d="M78.396 174.649c3.88-.788 13.053-9.216 22.561-8.823 9.226.381 18.848 9.625 19.043 6.31 1.58-26.901-37.69-21.996-41.604 2.513M167.641 174.217c-3.603-.692-14.307-9.228-23.218-8.685-10.033.612-18.163 10.183-18.41 6.62-1.87-26.883 37.451-22.4 41.628 2.065"
        ></path>
        <path vectorEffect='non-scaling-stroke'
          fill="#0c0c0c"
          d="M-6.198 0A6.198 6.198 0 016.198 0c0 3.423-12.396 3.423-12.396 0z"
          transform="matrix(.51058 0 0 .51058 101.624 165.273)"
        ></path>
        <path vectorEffect='non-scaling-stroke'
          fill="#0c0c0c"
          d="M-6.198 0A6.198 6.198 0 016.198 0c0 3.423-12.396 3.423-12.396 0z"
          transform="matrix(.51058 0 0 .51058 145.52 164.416)"
        ></path>
        <path vectorEffect='non-scaling-stroke'
          fill="none"
          stroke="#3f5787"
          strokeWidth="0.808"
          d="M108.099 196.183c5.609 0 39.994 3.366 41.435-3.837 2.93-14.65-39.9-16.853-39.9 3.837"
        ></path>
        <path vectorEffect='non-scaling-stroke'
          fill="none"
          stroke="#3f5787"
          strokeWidth="0.6"
          d="M195.994 154.432c10.203-10.204 17.783-30.073 12.086-44.316"
        ></path>
      </svg>
    </SvgContainer>
  )
}