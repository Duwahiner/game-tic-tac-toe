import styled from '@emotion/styled'
import { Flex } from 'rebass'

export const Container = styled(Flex)`
  border: solid 1px #EDECEB;
  border-radius: 4px;
`
export const ContainerSquare = styled(Flex)`
  padding: 15px 150px;
  background-color: #F2B705;
  box-sizing: border-box;
`
export const Block = styled(Flex)`
  font-size: 20px;
  color: white;
  cursor: pointer;
`
export const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: RobotoBold;
  font-size: 16px;
  color: #F2B705;
  transition: all 0.3s ease-in-out;
  &:hover{
    color: #FF5733;
  }
`
