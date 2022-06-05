import {
  Box,
  Container,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function PageHome() {
  return (
    <>
      <Container paddingY='24' textAlign='center'>
        <Stack spacing='8' direction='column'>
          <Text fontSize={{ base: 'sm', md: 'large', lg: 'xl' }}>
            The name's Wyly ...
          </Text>

          <Heading textAlign='center' fontSize={{ base: '3xl', md: '5xl', lg: '7xl' }}>
            <Text color='themed.accent3'>
              Colin Wyly
            </Text>
            <Box
              minHeight='1'
              marginTop='2'
              marginBottom='2'
              marginX='auto'
              maxWidth='75%'
              bgGradient='linear(90deg, themed.scheme 0%, themed.secondary 50%, themed.scheme 100%)'
            />
            <Text fontSize={{ base: 'lg', md: '2xl', lg: '3xl' }}>
              Coder | Developer | Tech Guy
            </Text>
            <Text marginTop='5' fontSize='12px' fontWeight='normal'>
              * It's pronounced 'why-lee' <Text as='span' marginLeft='2' fontSize='16px'>😛</Text>
            </Text>
          </Heading>

          <Text>
            Thanks for stopping by! You can find out more about me and my work by visiting the many links peppered on this site.
          </Text>

          <Heading paddingTop='10'>
            But First ...
          </Heading>
        </Stack>
      </Container>

      <Container>
        <Spacer minHeight='100' />
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex repellat ducimus neque tempora quas deleniti eaque! Nobis, quia doloremque, libero possimus debitis pariatur iste quam sed placeat ducimus corporis id?
          Voluptatibus molestiae aperiam eos aliquam, similique ullam exercitationem suscipit, enim fugit atque reprehenderit iste magni sit quia dignissimos tenetur magnam id! Voluptatem animi tempora, assumenda corrupti nihil excepturi officiis facilis.
          Possimus voluptatibus nesciunt itaque natus quod consequuntur explicabo! Qui quam temporibus consequatur, nemo ex tempore rerum quos tempora voluptates, culpa nobis nisi? Animi deleniti adipisci hic quas? Corrupti, quaerat eaque.
          Voluptatibus placeat quisquam, earum modi provident esse accusamus cum iure asperiores? Harum voluptatum nesciunt qui ex. Sunt deserunt, alias ipsum repellendus sed, totam sapiente magni architecto ipsam quisquam officia in?
          Voluptatibus amet ex laborum officia atque assumenda maxime commodi quos fugit totam maiores aperiam a, deserunt id ea modi asperiores nam autem sunt qui repellat omnis ut optio. Magni, rerum!
        </Text>
      </Container>
    </>
  )
}
