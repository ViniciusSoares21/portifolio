import Home from './pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'

function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/About' element={ <About />} />
        <Route path='/fullstack' element={ <Projects />} />
        <Route path='/frontend' element={ <Projects />} />
        <Route path='/backend' element={ <Projects />} />
        <Route path='*' element={ <NotFound />} />
      </Routes>
    </main>
  )
}

export default App
