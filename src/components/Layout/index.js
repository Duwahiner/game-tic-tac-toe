import { Box, Flex } from 'rebass'
import Footer from '../Footer'

const Layout = ({ children }) => {
  return (
    <Flex height='100vh' width={1} flexDirection='column'>
      <Flex flex='auto' as='main' width={1}> {children} </Flex>
      <Box flex='none' as='footer' width={1}> <Footer /> </Box>
    </Flex>
  )
}

export default Layout
