import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import PostDetail from './pages/PostDetail'
import AddPost from './admin/AddPost'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/post/:slug" element={<PostDetail />} />
        <Route path="/admin/add" element={<AddPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App