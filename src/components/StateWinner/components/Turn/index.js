import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Span } from '../../styleComponents'

const Turn = ({ player }) => {
  const theme = useContext(ThemeContext)
  return (
    <Span
      style={{ marginLeft: '10px' }}
      fontSize='16px'
      color={theme.colors.bgMenu}
      className='animate__animated animate__flipInX'
    > {player}
    </Span>
  )
}

export default Turn
