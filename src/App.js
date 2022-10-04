import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Page404 from './pages/404/page404'
import Home from './pages/home/Home'
import Apropos from './pages/apropos/Apropos'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/apropos" element={ <Apropos /> } />
        <Route path="*" element={ <Page404 /> } />
      </Routes>

    </div>
  )
}

export default App
