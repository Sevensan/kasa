import '../../styles/Footer.scss'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
      <Link to="/">
        <img src={require('../../assets/img/LOGO-white.png')} alt='logo' className='header__logo'></img>
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
