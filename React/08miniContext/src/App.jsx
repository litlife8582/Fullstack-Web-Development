import UserContext from './context/UserContext'
import Login from './components/login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <Login/>
      <br/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
