
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import CreateBlog from './Pages/createBlog'
import AllPosts from './Pages/AllPosts'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />


        <Route path="/posts" element={<AllPosts />} />
        <Route path="/write" element={<CreateBlog />} />
      </Routes>
    </>
  )
}

export default App
