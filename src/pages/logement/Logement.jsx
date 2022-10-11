import { useParams } from "react-router-dom"
import { getDataById } from "../../assets/data/useData"
import Carousel from "../../components/carousel/Carousel"
import Accordion from "../../components/accordion/Accordion"
import Stars from "../../components/stars/Stars"
import Tag from "../../components/tags/Tag"
import '../../styles/Logement.scss'
export default function Logement() {
  const params = useParams()
  const logement = getDataById(params.id)
  const description = {title: 'Description', description: logement.description}
  const equipments = {title: 'Équipements', description: logement.equipments}
  return (
    <div className="logement">
      <Carousel pictures={logement.pictures}/>
      <h1>{ logement.title }</h1>
      <p>{ logement.location }</p>
      <div class="tags">
        {logement.tags.map(tag => <Tag tag={tag} />)}
      </div>

      <div className="logement__flex-center">
        <Stars rating={parseInt(logement.rating)}/>
        <div className="host">
          <p>{ logement.host.name }</p>
          <img src={logement.host.picture} />
        </div>
      </div>
      <div class="accordions">
        <Accordion content={description} />
        <Accordion content={equipments} />
      </div>
    </div>
  )
}