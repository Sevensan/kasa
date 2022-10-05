import { useParams } from "react-router-dom"
import { getDataById } from "../../assets/data/useData"
import Carousel from "../../components/carousel/Carousel"

export default function Logement() {
  const params = useParams()
  const logement = getDataById(params.id)

  return (
    <div>
      <h1>{ logement.title }</h1>
      <Carousel pictures={logement.pictures}/>
    </div>
  )
}