
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import CreateBlog from './Pages/createBlog'
import AllPosts from './Pages/AllPosts'
import BlogPost from './Pages/components/BlogPost'
import RequiredAuth from './Pages/RequiredAuth'
import Denied from './Pages/Denied'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/denied" element={<Denied />} />


        <Route element={<RequiredAuth />}>
          <Route path="/posts" element={<AllPosts />} />
          <Route path="/write" element={<CreateBlog />} />
          <Route path="/BlogPost" element={<BlogPost />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
