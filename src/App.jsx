import Navbar from "./components/navbar/Navbar"
import { Outlet } from 'react-router-dom'

import './styles/globals.scss'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Projeto Coast</h1>
      <Outlet/>
      <p>footer</p>
    </div>
  )
}

export default App
