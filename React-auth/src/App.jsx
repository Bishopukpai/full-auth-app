import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
//Import Pages
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
//Import styled components
import { StyledContainer } from './components/Styles'

const App = () => {
  return (
    <Router>
      <StyledContainer>
    <Routes>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/' element={<Homepage />}/>
          <Route path='/login' element={ <Login/>}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
      </StyledContainer>
    </Router>
  )
}

export default App