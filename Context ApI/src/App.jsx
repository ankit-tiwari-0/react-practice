import Log from "./component/log"
import Profile from "./component/Profile"
import UsercontextProvider from "./context/UsercontextProvider"

function App() {

  return (
    <UsercontextProvider>
      <div>
        <h1>hhhhhhhhhhh</h1>
        <Log />
        <Profile />
      </div>
    </UsercontextProvider>
  )
}

export default App
