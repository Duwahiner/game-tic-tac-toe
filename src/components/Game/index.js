import { Flex } from 'rebass'
import Board from '../Board'
import Layout from '../Layout'

const Game = (props) => {
  return (
    <Layout>
      <Flex
        className='animate__animated animate__fadeIn'
        width={1}
        justifyContent='center'
        alignItems='center'
      >
        <Board />
      </Flex>
    </Layout>
  )
}

export default Game
