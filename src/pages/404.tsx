import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Spinner } from '@chakra-ui/react'

import Layout from '@components/Layout'

const Custom404 = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [])

  return (
    <Layout>
      <Spinner mt={8} />
    </Layout>
  )
}

export default Custom404
