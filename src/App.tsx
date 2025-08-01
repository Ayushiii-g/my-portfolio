import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Blog from './Pages/Blog'

function App() {
  return (
    <Router>
      <div className="w-full h-full bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blog />} />
          
        </Routes>
      </div>
    </Router>
  )
}

export default App
