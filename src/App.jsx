import Home from './pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/About' element={ <About />} />
        <Route path='*' element={ <NotFound />} />
      </Routes>
    </main>
  )
}

export default App
