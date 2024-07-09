import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePage'

import DetailPage from './pages/DetailPage'
const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/detailpage/:names" element={<DetailPage/>}></Route>
    </Routes>
  </Router>

  )
}

export default App
