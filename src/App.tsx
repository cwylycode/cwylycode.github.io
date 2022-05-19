import { ChakraProvider, Button } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Button margin={3} color={'white'} bgColor={'black'}>Hello</Button>
      <div>
        <h1>Greets</h1>
        <p>Hi</p>
      </div>
    </ChakraProvider>
  )
}

export default App