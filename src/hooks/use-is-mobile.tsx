import { useMediaQuery } from "@chakra-ui/react";

/**
 * React hook for checking if the app is running on a mobile device using media queries.
 *
 * @example
 * const isMobile = useIsMobile()
 * backgroundColor = { isMobile ? 'green' : 'red' }
 * 
 * @returns true or false
 */

export default function useIsMobile(): boolean {
  return !useMediaQuery('(pointer: fine')[0]
}