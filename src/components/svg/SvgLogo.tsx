import { SvgContainer, SvgContainerProps } from "../SvgContainer";

export default function SvgLogo({ ...props }: SvgContainerProps) {
  return (
    <SvgContainer variant='doodle' {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="0 0 512 512"
      >
        <path
          strokeWidth="0"
          d="M0 256C0 114.615 114.615 0 256 0s256 114.615 256 256-114.615 256-256 256S0 397.385 0 256zm256 231c127.578 0 231-103.422 231-231S383.578 25 256 25 25 128.422 25 256s103.422 231 231 231z"
        ></path>
      </svg>
    </SvgContainer>
  )
}