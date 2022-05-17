import { useState } from "react";

import { Button, createStyles, Navbar, SegmentedControl, Transition } from "@mantine/core";
import { BsSunFill, BsMoonFill, BsTerminalFill, BsRainbow } from "react-icons/bs"

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');

  return {
    navbar: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
            : theme.colors[theme.primaryColor][0],
        color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 7],
        [`& .${icon}`]: {
          color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 7],
        },
      },
    },
  }
})

function PageButton({ label }) {
  return (
    <Button className="">{label}</Button>
  )
}

export default function NavBar({ navbarOpen }) {
  const { classes, cx } = useStyles();
  const [activeTheme, setActiveTheme] = useState("dark")

  return (
    <Navbar
      className={classes.navbar}
      p="md"
      hiddenBreakpoint="sm"
      hidden={!navbarOpen}
      width={{ sm: 200 }}
    >
      <Transition mounted={navbarOpen} transition="scale-y" duration={500}>
        {(styles) =>
          <><Navbar.Section>
            <SegmentedControl
              // Segmented control component has a selection animation issue that becomes evident when using fullWidth and resizing the component in the window. The component's selection span element generates new classes when resizing and the animation seems to be playing 'catch up' with where the selection should be. Setting animation duration to nothing prevents wonky animation during resizing, but does not fix the class generation issue.
              value={activeTheme}
              onChange={setActiveTheme}
              fullWidth
              transitionTimingFunction="linear"
              transitionDuration={0}
              data={[
                { label: <BsSunFill size={28} />, value: 'light' },
                { label: <BsMoonFill size={28} />, value: 'dark' },
                { label: <BsTerminalFill size={28} />, value: 'hacker' },
                { label: <BsRainbow size={28} />, value: 'colorful' },
              ]}
            />
          </Navbar.Section>

            <Navbar.Section grow mt="xl">
              <PageButton label="About" />
            </Navbar.Section>

            <Navbar.Section><p>character here</p></Navbar.Section></>
        }
      </Transition>
    </Navbar>
  );
}