import { IconButton, Flex, Spacer, Box, BoxProps, useOutsideClick, usePrefersReducedMotion, useDisclosure, } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import { useRef, useState } from "react"
import { FaHamburger } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import HomeLogo from "./HomeLogo"
import NavMenu from "./NavMenu"
import ThemeButtons from "./ThemeButtons"

interface NavbarProps extends BoxProps {
  theme: string,
  changeTheme: (themeName: string) => void,
  changePage: (pageName: string) => void
}

export default function Navbar({ theme, changeTheme, changePage, ...props }: NavbarProps) {
  const { isOpen, onToggle } = useDisclosure()
  const noAnim = usePrefersReducedMotion()
  const mobileCollapseRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState<string>('')

  useOutsideClick({
    ref: mobileCollapseRef,
    handler: () => { isOpen ? onToggle() : null }
  })

  function handlePageChange(pageName?: string) {
    if (pageName) {
      if (isOpen) { // Let the navbar closing animation change the page instead
        setPage(pageName)
        onToggle()
        return
      }
      changePage(pageName)
    }
    if (page) {
      changePage(page)
      setPage('')
    }
  }

  return (
    <Box
      id='nav-mobile'
      display={{ base: 'block', md: 'none' }}
      position='fixed'
      width='100%'
      top='0'
      zIndex='9999'
      {...props}
    >
      <AnimatePresence >
        {isOpen &&
          <Box
            id='navbar-backdrop'
            as={motion.div}
            animate={noAnim ? undefined : { opacity: 1 }}
            exit={noAnim ? undefined : { opacity: 0 }}
            position='fixed'
            opacity={0}
            width='100vw'
            height='100vh'
            backgroundColor='blackAlpha.800'
            zIndex='-1'
          />
        }
      </AnimatePresence>
      <Box
        id="navbar"
        ref={mobileCollapseRef}
        height='100%'
      >
        <Flex
          backgroundColor='themed.accent7'
          px="4"
          alignItems="center"
          justifyContent="flex-start"
          height='100%'
        >
          <IconButton
            icon={isOpen ? <IoMdClose /> : <FaHamburger />}
            color='themed.accent6'
            variant="ghost"
            position='absolute'
            fontSize='48px'
            onClick={onToggle}
            aria-label="open menu"
            zIndex='1' // Makes it clickable because of spinning home logo interference
            _hover={{}}
          />

          <Spacer />
          <HomeLogo onClick={() => { handlePageChange('home') }} height='75%' />
          <Spacer />
        </Flex>

        <AnimatePresence onExitComplete={handlePageChange}>
          {isOpen &&
            <Box
              as={motion.div}
              animate={{ height: 360 }}
              exit={{ height: 0 }}
              height={0}
              overflow='hidden'
            >
              <NavMenu
                id='menu-mobile'
                onLinkClick={handlePageChange}
                width='full'
                paddingTop='2'
                paddingBottom='5'
              >
                <ThemeButtons theme={theme} changeTheme={changeTheme} />
              </NavMenu>
            </Box>
          }
        </AnimatePresence>
      </Box>
    </Box >
  )
}