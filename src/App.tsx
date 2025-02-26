import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
const App = () => {
  return (
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}>

        </Route>
      </Routes>
    </div>
  </Router>
  )
}

export default App