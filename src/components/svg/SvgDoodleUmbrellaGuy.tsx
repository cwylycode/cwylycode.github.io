import { usePrefersReducedMotion } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { SvgContainer, SvgContainerProps } from "../SvgContainer";

function SvgDoodleUmbrellaGuy1({ ...props }: SvgContainerProps) {
  return (
    <SvgContainer variant='themed' {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="0 0 512 512"
      >
        <g fill="none" stroke="#3f5787">
          <path vectorEffect='non-scaling-stroke'
            strokeWidth="3"
            d="M248.26 179.187c62.43-6.05 110.42 15.39 139.116 60.485 14.09 22.14 24.192 47.099 37.784 72.583 12.16 22.8 25.209 18.461 38.976 40.096 19.14 30.076 9.323 109.191-14.763 129.262-17.455 14.546-39.993 17.457-61.997 19.658-25.044 2.504-75.598 2.415-97.856-8.604-43.713-21.639-142.573-8.499-187.089 8.604-27.328 10.5-79.22-36.18-84.19-70.966-8.899-62.291 51.909-79.313 84.19-118.05 27.41-32.891 43.755-74.692 64.174-93.753s19.225-33.264 81.655-39.315z"
            transform="matrix(.93122 0 0 .93122 52.519 32.285)"
          ></path>
          <path vectorEffect='non-scaling-stroke'
            strokeWidth="3"
            d="M28.05 449.693l-39.025 33.302-26.242-17.287M62.56 469.865L28.36 508.103.034 494.495M110.527 300.47c-17.903-6.51-35.768-27.454-33.622-49.493 2.026-20.79 40.366-31.16 57.52-80.775"
            transform="matrix(.93122 0 0 .93122 52.519 32.285)"
          ></path>
          <g strokeWidth="3">
            <path vectorEffect='non-scaling-stroke'
              d="M177.005 253.482c1.332-3.748 31.667-10.651 30.697-15.708M177.029 253.39c11.223-1.847 29.174-2.793 28.643-7.737M177.571 253.53c7.049.704 25.448 7.329 26.072.566"
              transform="matrix(.93122 0 0 .93122 52.519 32.285) rotate(-14.446 -171.705 382.215)"
            ></path>
          </g>
          <g strokeWidth="3">
            <path vectorEffect='non-scaling-stroke'
              d="M286.062 474.682c-1.11-18.022 15.54-33.356 33.25-33.175M113.746 404.885c24.245 7.961 37.29 32.523 24.893 47.646"
              transform="matrix(.93122 0 0 .93122 52.519 32.285) translate(-.047 -57.708)"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              d="M135.334 421.49c13.815-10.661 54.388-25.567 83.222-19.224s68.118 29.874 77.202 50.047M274.56 290.194c-.763 13.201-7.775 53.58-11.065 67.984M212.603 284.596c-3.59 17.3-13.907 49.504-14.195 61.91"
              transform="matrix(.93122 0 0 .93122 52.519 32.285) translate(-.047 -57.708)"
            ></path>
          </g>
          <g strokeWidth="2.5">
            <path vectorEffect='non-scaling-stroke'
              d="M245.257 138.543v80.354c0 7.605 4.044 13.423 10.146 13.423s12.567-7.41 12.567-13.423"
              transform="matrix(.93122 0 0 .93122 52.519 32.285) matrix(1.32425 0 0 1.32425 -170.958 -119.41)"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              d="M155.135 150.48s2.82-30.053 23.873-52.26c16.956-17.884 50.6-28.858 66.846-28.91 15.396-.05 45.982 5.96 62.07 21.486 21.966 21.196 27.455 53.715 27.455 53.715s-16.114-22.68-47.747-22.68-41.778 16.712-41.778 16.712-15.518-16.712-42.972-16.712-47.747 28.648-47.747 28.648z"
              transform="matrix(.93122 0 0 .93122 52.519 32.285) matrix(1.32425 0 0 1.32425 -170.958 -119.41)"
            ></path>
          </g>
        </g>
      </svg>
    </SvgContainer>
  )
}

function SvgDoodleUmbrellaGuy2({ ...props }: SvgContainerProps) {
  return (
    <SvgContainer variant='themed' {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="0 0 512 512"
      >
        <g fill="none" stroke="#3f5787">
          <path vectorEffect='non-scaling-stroke'
            strokeWidth="3"
            d="M248.26 179.187c62.43-6.05 110.42 15.39 139.116 60.485 14.09 22.14 24.192 47.099 37.784 72.583 12.16 22.8 25.209 18.461 38.976 40.096 19.14 30.076 9.323 109.191-14.763 129.262-17.455 14.546-39.993 17.457-61.997 19.658-25.044 2.504-75.598 2.415-97.856-8.604-43.713-21.639-142.573-8.499-187.089 8.604-27.328 10.5-79.22-36.18-84.19-70.966-8.899-62.291 51.909-79.313 84.19-118.05 27.41-32.891 43.755-74.692 64.174-93.753s19.225-33.264 81.655-39.315z"
            transform="matrix(.93122 0 0 .93122 52.519 32.285)"
          ></path>
          <path vectorEffect='non-scaling-stroke'
            strokeWidth="3"
            d="M28.05 449.693l-39.025 33.302-26.242-17.287M62.56 469.865L28.36 508.103.034 494.495M110.527 300.47c-17.903-6.51-35.768-27.454-33.622-49.493 2.026-20.79 40.366-31.16 57.52-80.775"
            transform="matrix(.93122 0 0 .93122 52.519 32.285)"
          ></path>
          <g strokeWidth="3">
            <path vectorEffect='non-scaling-stroke'
              d="M177.005 253.482c1.332-3.748 31.667-10.651 30.697-15.708M177.029 253.39c11.223-1.847 29.174-2.793 28.643-7.737M177.571 253.53c7.049.704 25.448 7.329 26.072.566"
              transform="matrix(.93122 0 0 .93122 52.519 32.285) rotate(-14.446 -171.705 382.215)"
            ></path>
          </g>
          <path vectorEffect='non-scaling-stroke'
            strokeWidth="3"
            d="M268.276 440.71c2.968-17.81 22.638-29.01 39.854-24.854M128.719 383.043c25.512.634 45.083 20.392 37.572 38.447"
            transform="matrix(.93122 0 0 .93122 52.519 32.285) translate(-.047 -57.708)"
          ></path>
          <path vectorEffect='non-scaling-stroke'
            strokeWidth="3"
            d="M159.86 395.153c13.815-10.661 34.6-28.834 63.435-22.49s49.16 27.691 58.244 47.864"
            transform="matrix(.93122 0 0 .93122 52.519 32.285) translate(-.047 -57.708)"
          ></path>
          <path vectorEffect='non-scaling-stroke'
            strokeWidth="3.272"
            d="M258.502 321.622l39.14 5.79M291.482 314.79l-33.199 7.135 33.2 21.745"
            transform="matrix(.93122 0 0 .93122 52.519 32.285) translate(-.047 -57.708)"
          ></path>
          <path vectorEffect='non-scaling-stroke'
            strokeWidth="3.557"
            d="M218.556 318.345l-35.529-6.175M186.033 293.968l32.523 24.377-37.225 11.22"
            transform="matrix(.93122 0 0 .93122 52.519 32.285) translate(-.047 -57.708)"
          ></path>
          <g strokeWidth="2.5">
            <path vectorEffect='non-scaling-stroke'
              d="M245.257 138.543v80.354c0 7.605 4.044 13.423 10.146 13.423s12.567-7.41 12.567-13.423"
              transform="matrix(.93122 0 0 .93122 52.519 32.285) matrix(1.32425 0 0 1.32425 -170.958 -119.41)"
            ></path>
            <path vectorEffect='non-scaling-stroke'
              d="M155.135 150.48s2.82-30.053 23.873-52.26c16.956-17.884 50.6-28.858 66.846-28.91 15.396-.05 45.982 5.96 62.07 21.486 21.966 21.196 27.455 53.715 27.455 53.715s-16.114-22.68-47.747-22.68-41.778 16.712-41.778 16.712-15.518-16.712-42.972-16.712-47.747 28.648-47.747 28.648z"
              transform="matrix(.93122 0 0 .93122 52.519 32.285) matrix(1.32425 0 0 1.32425 -170.958 -119.41)"
            ></path>
          </g>
        </g>
      </svg>
    </SvgContainer>
  )
}

interface SvgDoodleUmbrellaGuyProps extends SvgContainerProps {
  isRaining: boolean
}
export default function SvgDoodleUmbrellaGuy({ isRaining, ...props }: SvgDoodleUmbrellaGuyProps) {
  const noAnim = usePrefersReducedMotion()
  const [rainState, setRainState] = useState(false)
  useEffect(() => {
    let timer = 0
    if (isRaining) {
      setRainState(true)
      clearTimeout(timer)
    } else {
      timer = setTimeout(() => {
        setRainState(false)
      }, 2000);
    }
    return () => clearTimeout(timer)
  }, [isRaining])

  return (
    !noAnim && rainState ?
      <SvgDoodleUmbrellaGuy2 {...props} /> :
      <SvgDoodleUmbrellaGuy1 {...props} />
  )
}