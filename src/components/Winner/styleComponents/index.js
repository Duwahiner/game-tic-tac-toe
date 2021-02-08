import styled from '@emotion/styled'
import { Box, Flex } from 'rebass'

export const Container = styled(Flex)`
  width: 630px;
  height: 330px;
  background-color: #F2B705;
`
export const BoxWinner = styled(Box)`
`
export const Span = styled.span`
  border: none;
  cursor: pointer;
  font-family: ${({ fontFamily }) => !fontFamily ? 'RobotoBold' : fontFamily};
  font-size: ${({ fontSize }) => !fontSize ? '20px' : fontSize};
  color: ${({ color }) => !color ? '#000' : color};
`
