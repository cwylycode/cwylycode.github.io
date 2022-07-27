import { Divider, Flex, Heading } from "@chakra-ui/react";

interface PageHeaderProps {
  title: string
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <Flex
      direction='column'
      alignItems='center'
      paddingTop='5'
      marginBottom='10'
    >
      <Heading>
        {title}
      </Heading>
      <Divider
        marginTop='5'
        borderWidth='1px'
        borderRadius='full'
        maxWidth='80%'
      />
    </Flex>
  )
}