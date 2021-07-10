import { Flex, FlexProps } from '@chakra-ui/react'

const Container = (props: FlexProps) => {
  return (
    <Flex
      direction='column'
      alignItems='center'
      justifyContent='flex-start'
      bg='brand.midnight-alt'
      color='brand.white'
      {...props}
    />
  )
}

export default Container
