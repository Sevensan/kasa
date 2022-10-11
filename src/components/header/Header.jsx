import '../../styles/Header.scss'
import { Link, useLocation } from 'react-router-dom'

export function Header() {
  const location = useLocation()
  return (
    <div className='header'>
      <Link to="/">
        <img src={require('../../assets/img/LOGO.png')} alt='logo' className='header__logo'></img>
      </Link>
      <div className='header-links'>
        <Link to="/">
          <h3 className={location.pathname === '/' ? 'active' : ''}>Accueil</h3>
        </Link>
        <Link to="/apropos">
          <h3 className={location.pathname === '/apropos' ? 'active' : ''}>A propos</h3>
        </Link>
      </div>
    </div>
  )
}

export default Header