// An ever-growing list, I'm sure...

import { ShowcaseCardProps } from "../components/ShowcaseCard";

import img_my_site from '../images/my_site.jpg'
import img_pytris from '../images/pytris.jpg'
import img_rpi from '../images/rpi.jpg'
import img_react_tac_toe from '../images/react_tac_toe.jpg'

export const ShowcaseItems: Array<ShowcaseCardProps> = [
  {
    title: 'My Website',
    img: img_my_site,
    imgOffset: { x: 40, y: 0 },
    imgSize: 750,
    link: 'https://cwylycode.github.io',
    linkText: 'Visit Websi-oh you\'re already here...',
    text: `My "professional" developer portfolio website. Made with React, Chakra UI, and a heap of libraries.\n\nThis was fun (and funny) to make and I learned quite a bit about component frameworks, web animations, and handling svg files/data. Also, I find it amusing that I'm showcasing my website on my website. 😝`
  },
  {
    title: 'Pytris',
    img: img_pytris,
    imgOffset: { x: 40, y: 350 },
    imgSize: 700,
    link: 'https://github.com/cwylycode/pytris',
    linkText: 'Check it out on GitHub!',
    text: `This is a "Tetris" clone made with the Python programming language.\n\nIt was fun and challenging to code, test and perfect, but I'd say it turned out rather well (both as a project and as an actual, playable game).`
  },
  {
    title: 'RaspberryPi Electronics Projects',
    img: img_rpi,
    imgOffset: { x: 0, y: 0 },
    imgSize: 750,
    link: 'https://github.com/cwylycode/RPI_Electronics_Projects',
    linkText: 'Check it out on GitHub!',
    text: `Bought a RaspberryPi kit one day. I used it originally for running a server and doing Linux-related tasks, but then I started playing around with the electronics portion of it and ended up making a few cool projects in Python.\n\nRight now it's a paper weight, but hopefully I'll make some more stuff with it soon!`
  },
  {
    title: 'React-Tac-Toe',
    img: img_react_tac_toe,
    imgOffset: { x: 25, y: 64 },
    imgSize: 600,
    link: 'https://cwylycode.github.io/react-tac-toe',
    linkText: 'Visit Website!',
    text: `My take on the famous tic-tac-toe game.\n\nThis was my first React project - it was either do a tic-tac-toe game, or make a shopping list (both ideas are popular first-time React projects). Made with bootstrap for handling css.`
  },
]