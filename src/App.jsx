
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import CreateBlog from './Pages/createBlog'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />


        <Route path="/write" element={<CreateBlog />} />
      </Routes>
    </>
  )
}

export default App
