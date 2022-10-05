import { Link } from "react-router-dom"

export default function Card (props) {
    return (
      <div className="home">
        <Link to={`/logement/${props.item.id}`}>
          <p>{props.item.title}</p>
          <img src={props.item.pictures[0]} alt={props.item.title} key={props.item.id} />
        </Link>
      </div>
    )
  }