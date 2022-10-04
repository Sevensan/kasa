import { Link } from 'react-router-dom'

export function Header() {
  return (
    <div>
      <Link to="/">
        <h2>KASA</h2>
      </Link>
      <Link to="/apropos">
        <h3>A propos</h3>
      </Link>
    </div>
  )
}

export default Header