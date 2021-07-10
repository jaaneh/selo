import { useState, FormEvent, ChangeEvent } from 'react'
import {
  useToast,
  VisuallyHidden,
  Input,
  Button,
  FormControl,
  SimpleGrid,
  GridItem,
  Text
} from '@chakra-ui/react'

import { emailRegex } from '@utils/helpers'

const Form = () => {
  const toast = useToast()
  const [email, setEmail] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)
  const [subscribed, setSubscribed] = useState<boolean>(false)

  const addToast = (
    title: string,
    description: string,
    status: 'success' | 'info' | 'warning' | 'error'
  ) => {
    toast({
      title,
      description,
      status,
      position: 'bottom-right',
      isClosable: true
    })
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setDisabled(true)
    setLoading(true)

    await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
      .then(res => res.json())
      .then(data => {
        setDisabled(false)
        setLoading(false)
        if (data.success === true) {
          setSubscribed(true)
          setEmail('')
          addToast('User subscribed', data.message, 'success')
        } else {
          addToast('Something went wrong', data.message, 'error')
        }
      })
  }

  return (
    <>
      {subscribed ? (
        <Text as='p' fontWeight='light' fontSize='lg' color='brand.white' mt={4}>
          Thanks for subscribing!
        </Text>
      ) : (
        <FormControl id='email' mt={6}>
          <SimpleGrid
            as='form'
            columns={{ base: 1, lg: 3 }}
            spacing={3}
            mx='auto'
            onSubmit={handleSubmit}
          >
            <GridItem as='label' colSpan={{ base: 'auto', lg: 2 }}>
              <VisuallyHidden>Your Email</VisuallyHidden>
              <Input
                mt={0}
                borderRadius='md'
                size='lg'
                type='email'
                placeholder='Enter email..'
                color='brand.white'
                required={true}
                value={email}
                borderColor='brand.gray'
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const emailInput = e.target.value
                  setEmail(emailInput)
                  emailInput.match(emailRegex) ? setDisabled(false) : setDisabled(true)
                }}
              />
            </GridItem>
            <Button
              w='full'
              variant='brand-blue'
              size='lg'
              type='submit'
              isDisabled={disabled}
              isLoading={loading}
            >
              Subscribe
            </Button>
          </SimpleGrid>
        </FormControl>
      )}
    </>
  )
}

export default Form
