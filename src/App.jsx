
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  )
}

export default App
