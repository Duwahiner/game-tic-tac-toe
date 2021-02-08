import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Box, Flex } from 'rebass'
import { TextFooter } from './styleComponents'

const Footer = (props) => {
  const theme = useContext(ThemeContext)
  return (
    <Flex
      width={1}
      py='10px'
      justifyContent='center'
      sx={{
        borderTop: `solid 1px ${theme.colors.border}`
      }}
    >
      <Box
        width='auto'
      >
        <TextFooter color={theme.colors.textFooter}> CONTACT: GRAFIFOTOLUZ@GMAIL.COM </TextFooter>
      </Box>
    </Flex>
  )
}

export default Footer
