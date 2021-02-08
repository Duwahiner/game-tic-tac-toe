import styled from '@emotion/styled'
import Proptypes from 'prop-types'

export const Text = styled.span`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${(props) => props.color}
`

Text.propTypes = {
  color: Proptypes.string
}

Text.defaultProps = {
  color: '#fff'
}
