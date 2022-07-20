import { Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const delay = 1

export default function PageSpinner() {
  const [showSpinner, setShowSpinner] = useState<boolean>(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(true)
    }, delay * 1000);
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      {showSpinner &&
        <Flex minHeight='inherit' justifyContent='center' alignItems='center'>
          <Spinner size='xl' color="themed.scheme" thickness="5px" speed="1s" />
        </Flex>
      }
    </>
  )
}