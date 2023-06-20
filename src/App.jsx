import Home from './pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'

function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/About' element={ <About />}/>
      </Routes>
    </main>
  )
}

export default App
