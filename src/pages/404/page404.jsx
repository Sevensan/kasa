import '../../styles/404.scss'
import { Link } from 'react-router-dom'
export default function Page404() {
  return (
    <div className="text-404">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}
