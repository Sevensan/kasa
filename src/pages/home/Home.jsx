import Banner from "../../components/banner/Banner"
import Card from "../../components/cards/Card"
import { getData } from "../../assets/data/useData"

export default function Home() {

    return (
      <div className="home">
        <h1>COUCOU BIEN OU BIEN ?</h1>
        <Banner img='IMG.png' />
        <div>
          {getData().map(logement => (
            <Card  item={logement} key={logement.id}/>
          ))}
        </div>
      </div>
    )
  }