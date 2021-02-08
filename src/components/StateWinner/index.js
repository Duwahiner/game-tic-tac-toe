import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Flex } from 'rebass'
import Turn from './components/Turn'
import { BoxWinner, Span, Container } from './styleComponents'

const StateWinner = ({ winner }) => {
  const theme = useContext(ThemeContext)
  const { winnerX, winnerO, turn, player } = winner

  return (
    <Container
      width={1}
      flexDirection='column'
    >
      <Flex width={1} justifyContent='center'>
        <BoxWinner>
          <Flex alignItems='center' justifyContent='space-between'>
            <Span> X </Span> <Span color={theme.colors.colorWinner}> {winnerX} </Span>
          </Flex>
        </BoxWinner>
        <BoxWinner>
          <Flex alignItems='center' justifyContent='space-between'>
            <Span> O </Span> <Span color={theme.colors.colorWinner}> {winnerO} </Span>
          </Flex>
        </BoxWinner>
      </Flex>

      <Flex height='20px' mt='20px' justifyContent='center' alignItems='center'>
        <Span
          fontFamily='Roboto'
          color={theme.colors.textFooter}
          fontSize='13px'
        > {turn}
        </Span>
        {
          turn === 'Turno de' &&
            <Turn player={player} />
        }
      </Flex>
    </Container>
  )
}

export default StateWinner
