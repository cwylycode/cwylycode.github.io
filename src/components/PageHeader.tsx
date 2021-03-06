import { Divider, Flex, Heading } from "@chakra-ui/react";

interface PageTitleProps {
  title: string
}

export default function PageHeader({ title }: PageTitleProps) {
  return (
    <Flex
      direction='column'
      alignItems='center'
      paddingTop='5'
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