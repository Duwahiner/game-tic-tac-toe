import styled from '@emotion/styled'
import Proptypes from 'prop-types'

export const TextFooter = styled.span`
  font-family: Roboto;
  font-size: 11px;
  color: ${(props) => props.color}
`

TextFooter.propTypes = {
  color: Proptypes.string
}

TextFooter.defaultProps = {
  color: '#fff'
}
