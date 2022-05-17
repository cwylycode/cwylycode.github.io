import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

import { FaHamburger } from 'react-icons/fa'

import {
  AppShell,
  Header,
  Text,
  MediaQuery,
  Burger,
  MantineProvider,
  Drawer,
  Button,
  SegmentedControl,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import NavBar from './components/Navbar'

function App() {
  const largeScreen = useMediaQuery('(min-width: 768px)')
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [opened, setOpened] = useState(false)

  return (
    <MantineProvider
      theme={{ colorScheme: "dark" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <AppShell
        navbarOffsetBreakpoint="sm"
        fixed
        navbar={<NavBar navbarOpen={navbarOpen} />}
        header={
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Header height={largeScreen ? 0 : 70} p="md">
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <Burger
                  opened={navbarOpen}
                  onClick={() => setNavbarOpen((o) => !o)}
                  size="sm"
                  mr="xl"
                />
                <Text>Application header</Text>
              </div>
            </Header>
          </MediaQuery>
        }
      >
        <Text>Resize app to see responsive navbar in action</Text>
      </AppShell>
    </MantineProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)