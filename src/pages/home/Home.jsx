import Banner from "../../components/banner/Banner"
import Card from "../../components/cards/Card"
import { getData } from "../../assets/data/useData"
import '../../styles/Home.scss'

export default function Home() {

    return (
      <div className="home">
        <Banner img='home.png' title='Chez vous, partout et ailleurs' />
        <div className="cardlist">
          {getData().map(logement => (
            <Card  item={logement} key={logement.id}/>
          ))}
        </div>
      </div>
    )
  }