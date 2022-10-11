import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Page404 from './pages/404/page404'
import Home from './pages/home/Home'
import Apropos from './pages/apropos/Apropos'
import Logement from './pages/logement/Logement'
import Footer from './components/footer/Footer'
import './styles/App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/apropos" element={ <Apropos /> } />
        <Route path="/logement/:id/" element={ <Logement /> }/>
        <Route path="*" element={ <Page404 /> } />
      </Routes>
      </div>
      <Footer />

    </div>
  )
}

export default App
