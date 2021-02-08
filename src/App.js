import { Switch, Route } from 'react-router-dom'
import { Flex } from 'rebass'
import GamePage from './pages/GamePage'

const App = (props) => {
  return (
    <Flex>
      <Switch>
        <Route exact path='/' component={GamePage} />
      </Switch>
    </Flex>
  )
}

export default App
