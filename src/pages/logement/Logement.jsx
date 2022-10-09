import { useParams } from "react-router-dom"
import { getDataById } from "../../assets/data/useData"
import Carousel from "../../components/carousel/Carousel"
import Accordion from "../../components/accordion/Accordion"
import Stars from "./components/Stars"
export default function Logement() {
  const params = useParams()
  const logement = getDataById(params.id)

  return (
    <div>
      <h1>{ logement.title }</h1>
      <Carousel pictures={logement.pictures}/>
      <Accordion title={'Description'} description={logement.description} />
      <Stars rating={parseInt(logement.rating)}/>
    </div>
  )
}