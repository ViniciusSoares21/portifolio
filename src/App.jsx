import Home from './pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Contact from './pages/Contact'

function App() {

  return (
    <main>
      <Routes>
        <Route path='/Viniciussoares21.github.io' element={ <Home /> } />
        <Route path='/About' element={ <About />} />
        <Route path='/Contact' element={ <Contact />} />
        <Route path='/fullstack' element={ <Projects />} />
        <Route path='/frontend' element={ <Projects />} />
        <Route path='/backend' element={ <Projects />} />
        <Route path='/datascience' element={ <Projects />} />
        <Route path='/project/:title' element={ <ProjectDetails />} />
        <Route path='*' element={ <NotFound />} />
      </Routes>
    </main>
  )
}

export default App
