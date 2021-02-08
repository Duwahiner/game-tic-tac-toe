import styled from '@emotion/styled'
import { Flex } from 'rebass'

export const Container = styled(Flex)`
  width: 110px;
  height: 100px;
  
`
export const ContainerBlock = styled(Flex)`
  width: 110px;
  height: 100px;
  background-color: '#0f9185';
  margin: ${(margin) => margin};
  color: white;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  flex: none;
`
export const ContainerSquare = styled(Flex)`
  padding: 15px 150px;
  background-color: #F2B705;
`
export const Block = styled(Flex)`
  font-size: 20px;
  color: white;
  cursor: pointer;
`
