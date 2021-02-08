import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Flex } from 'rebass'
import { BoxWinner, Span, Container } from './styleComponents'

const Winner = ({ winner }) => {
  const theme = useContext(ThemeContext)
  return (
    <Container
      width={1}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      {
        winner.winner === 1
          ? (
            <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              className='animate__animated animate__fadeIn'
            >
              {
                winner.winnerXOfO === 'X'
                  ? <Span color={theme.colors.colorX} fontSize='180px' fontFamily='Fredoka'> {winner.winnerXOfO} </Span>
                  : <Span color={theme.colors.colorO} fontSize='180px' fontFamily='Fredoka'> {winner.winnerXOfO} </Span>
              }
              <Span fontSize='30px' color={theme.colors.colorX}> ¡GANADOR! </Span>
            </Flex>
            )
          : (
            <Flex
              width={1}
              justifyContent='center'
              className='animate__animated animate__fadeIn'
            >
              <BoxWinner>
                <Flex flexDirection='column' alignItems='center' justifyContent='space-between'>
                  <Flex>
                    <Span fontSize='100px' color={theme.colors.colorX} fontFamily='Fredoka'> X </Span>
                    <Span fontSize='100px' color={theme.colors.colorO} fontFamily='Fredoka'> O </Span>
                  </Flex>
                  <Span fontSize='30px' color={theme.colors.colorX}> ¡EMPATE! </Span>
                </Flex>
              </BoxWinner>
            </Flex>
            )
      }
    </Container>
  )
}

export default Winner
