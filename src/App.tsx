import { useEffect } from 'react'
import {
  Button,
  ChakraProvider,
  Heading,
  useBoolean,
} from '@chakra-ui/react'
import AppShell from './components/AppShell'

import { themeLight } from './themes/light'
import { themeDark } from './themes/dark'

export default function App() {

  const [theme, setTheme] = useBoolean(true)

  useEffect(() => {
    localStorage.removeItem("chakra-ui-color-mode")
  }, [])

  return (
    <ChakraProvider resetCSS theme={theme ? themeLight : themeDark}>
      <AppShell>
        <Heading>Hello</Heading>
        <Button my='10' onClick={setTheme.toggle}>Toggle Theme</Button>
        <div>
          <h1>Greets</h1>
          <p>Hi</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam rem iure ea assumenda, aliquid soluta dignissimos ipsam nulla impedit! Tempora a aliquam minima tempore voluptas, suscipit eius praesentium pariatur autem?
          Ea repudiandae itaque repellendus voluptate voluptates, corrupti non iste architecto consectetur hic ab soluta necessitatibus autem, aut error rerum molestias deleniti fugiat totam sunt, enim asperiores. Voluptatem adipisci explicabo reprehenderit!
          Nulla nisi omnis incidunt quidem dignissimos itaque atque, quasi corporis dolores ratione recusandae maxime iusto ut consectetur quibusdam deserunt? Non itaque necessitatibus ratione asperiores, pariatur esse eum debitis voluptates praesentium!
          Cumque incidunt vel eveniet sed saepe nihil, facilis obcaecati dolore modi iusto nemo aspernatur voluptatum id non doloribus voluptates. Neque quam voluptatum, a aut at eum architecto unde rerum quos.
          Laborum delectus et debitis dolores laboriosam quas rerum quisquam ipsa error doloremque hic vitae sequi deserunt fuga, odit eius tempore. Alias, fugiat! Eius, dolores voluptates. Illo dignissimos quia hic repellendus!
          Pariatur corrupti dicta deleniti aut repudiandae magni possimus voluptatem laborum eius sed similique reiciendis ab illo quo dolorem iure amet magnam optio, rem rerum doloribus inventore quae hic! Magni, qui!
          Quisquam neque suscipit id iusto quidem aliquid molestias architecto, maxime corporis. Dolor consequatur, nihil eligendi nam pariatur incidunt ex similique dolorum impedit consectetur doloribus? Suscipit nam eaque eos rerum perferendis!
          Molestiae harum corporis commodi repellendus tempora reprehenderit fugiat cumque ratione, voluptas assumenda iure cupiditate velit minus alias reiciendis sunt! Eaque modi commodi impedit deleniti magnam mollitia voluptate illum deserunt quas.
          Ex maxime doloremque incidunt tempora odio voluptate consequuntur blanditiis quasi quisquam maiores? Molestiae, et voluptatem. In quis, vero ipsam placeat quibusdam voluptatem, numquam fugiat culpa praesentium autem ab deserunt! Reprehenderit?
          Delectus molestias necessitatibus sint nulla ullam pariatur, dolorum voluptatem quas maiores culpa fugit vel distinctio. Aliquam, perferendis. Rem dolorem omnis veniam fuga nemo! Molestiae laboriosam illo iusto iure! Officiis, harum!
        </div>
      </AppShell>
    </ChakraProvider>
  )
}