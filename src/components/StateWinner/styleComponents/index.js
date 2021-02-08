import styled from '@emotion/styled'
import { Box, Flex } from 'rebass'

export const Container = styled(Flex)`
  margin: 20px 0px;
`
export const ContainerSquare = styled(Flex)`
  padding: 15px 150px;
  background-color: #F2B705;
  box-sizing: border-box;
`
export const BoxWinner = styled(Box)`
  width: 200px;
  border:  solid 1px #EDECEB;
  border-radius: 4px;
  padding: 6px 12px;
  margin: 0px 10px 0px 0px;
  box-sizing: border-box;
`
export const Span = styled.span`
  border: none;
  cursor: pointer;
  font-family: ${({ fontFamily }) => !fontFamily ? 'RobotoBold' : fontFamily};
  font-size: ${({ fontSize }) => !fontSize ? '20px' : fontSize};
  color: ${({ color }) => !color ? '#000' : color};
`
