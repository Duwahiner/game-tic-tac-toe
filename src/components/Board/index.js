import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { Flex } from 'rebass'
import Square from '../Square'
import StateWinner from '../StateWinner'
import Winner from '../Winner'
import { Button, Container } from './styleComponents'

const Board = (props) => {
  const [counter, setCounter] = useState(0)
  const theme = useContext(ThemeContext)

  const [winner, setWinner] = useState({
    player: 'X',
    winner: 0,
    show: 'square',
    winnerXOfO: '',
    winnerX: 0,
    winnerO: 0,
    turn: 'Comenzar partida',
    classCss: {
      flipInX: 'animate__flipInX'
    }
  })

  const [match, setMatch] = useState([
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ])

  const findWinner = (squareId, playerCurrent) => {
    const resultMatch = match.map((line) => {
      const resultLine = line.map((item) => {
        if (item === parseInt(squareId)) return playerCurrent
        return item
      })
      return resultLine
    })
    return resultMatch
  }

  const elementSpan = (state, color) => {
    return (
      `
        <div
          class='animate__animated animate__flipInX'
          style='width: 110px; height: 100px; display: flex;
          justify-content: center; align-items: center;'>
          <span style='color: ${color}; font-family: Fredoka; font-size: 60px;'> ${state.player} </span>
        </div>
      `
    )
  }

  const resetDOM = () => {
    const numId = Array.from({ length: 9 }, (v, i) => i)
    numId.forEach((item) => {
      const element = document.getElementById(`board--square--gm--${item}`)
      element.innerText = ''
    })
  }

  const resetState = () => {
    setCounter(0)
    setWinner({
      ...winner,
      player: 'X',
      winner: 0,
      show: 'square',
      winnerXOfO: '',
      turn: 'Comenzar partida'
    })

    setMatch([
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
      [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ])

    if (winner.show === 'square') resetDOM()
  }

  const valideWinner = () => {
    const win = match.map((line) => {
      const winnerXOfO = line.join('')
      if (winnerXOfO === 'XXX') {
        resetDOM()
        setWinner({
          ...winner,
          winner: 1,
          winnerXOfO: 'X',
          show: 'winner',
          player: 'O',
          winnerX: winner.winnerX + 1
        })
        setCounter(9)
        return ['XXX']
      }

      if (winnerXOfO === 'OOO') {
        resetDOM()
        setWinner({
          ...winner,
          winner: 1,
          winnerXOfO: 'O',
          player: 'X',
          show: 'winner',
          winnerO: winner.winnerO + 1
        })
        setCounter(9)
        return ['OOO']
      }
      return [null]
    })

    const noWin = win.filter((item) => ((item[0] === 'XXX') || (item[0] === 'OOO')))
    console.log(noWin)
    if (noWin.length === 0 && counter === 8) {
      setWinner({ ...winner, winner: 0, show: 'winner' })
      return null
    }
  }

  const handleClick = (e) => {
    const squareId = e.target.id
    const numSquare = squareId.slice(19, squareId.length)
    const elementSquare = e.target
    const valideId = /([0-8])/g

    if (valideId.test(numSquare)) {
      if (counter < 9) {
        setWinner((state) => {
          if (state.player === 'X') {
            elementSquare.innerHTML = elementSpan(state, theme.colors.colorX)
            return Object.assign({}, { ...state, player: 'O', turn: 'Turno de' })
          }
          if (state.player === 'O') {
            elementSquare.innerHTML = elementSpan(state, theme.colors.colorO)
            return Object.assign({}, { ...state, player: 'X', turn: 'Turno de' })
          }
        })

        setMatch((state) => {
          const winnerState = findWinner(numSquare, winner.player)
          return state.splice(0, state.length, ...winnerState)
        })
        setTimeout(() => valideWinner(), 100)
        setCounter((state) => state + 1)
      }
    }
  }

  return (
    <Container
      width='auto'
      flexDirection='column'
    >
      <StateWinner winner={winner} />
      {winner.show === 'square' ? <Square handleClick={handleClick} margin='' /> : null}
      {winner.show === 'winner' ? <Winner winner={winner} /> : null}
      <Flex width={1} my='20px' justifyContent='center'>
        <Button onClick={resetState}>REINICIAR PARTIDA</Button>
      </Flex>
    </Container>
  )
}

export default Board
