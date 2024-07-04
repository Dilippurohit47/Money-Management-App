import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePage'


const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
    </Routes>
  </Router>

  )
}

export default App
