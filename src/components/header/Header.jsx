import '../../styles/Header.scss'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <div className='header'>
      <Link to="/">
        <img src={require('../../assets/img/LOGO.png')} alt='logo' className='header__logo'></img>
      </Link>
      <Link to="/">
        <h3>Accueil</h3>
      </Link>
      <Link to="/apropos">
        <h3>A propos</h3>
      </Link>
    </div>
  )
}

export default Header