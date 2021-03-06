import { Text, Flex, Heading } from '@chakra-ui/react'

import Layout from '@components/Layout'
import Footer from '@components/Footer'
import Form from '@components/Form'

const Index = () => (
  <Layout>
    <Flex
      as='main'
      justifyContent='center'
      alignItems='center'
      flexDir='column'
      height='100vh'
    >
      <Heading
        as='h1'
        fontSize='8xl'
        bg='linear-gradient(to right, #7928CA, #FF0080)'
        bgClip='text'
      >
        Selo.fyi
      </Heading>
      <Text as='h2' fontWeight='light' fontSize='md' color='brand.white' mt={4}>
        Next generation tools for content creators.
      </Text>
      <Form />
    </Flex>

    <Footer />
  </Layout>
)

export default Index
