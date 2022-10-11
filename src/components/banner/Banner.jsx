import '../../styles/Banner.scss'

export default function Banner(props) {
  return (
    <div className='banner'>
      <p className='banner-title'>{props.title}</p>
      <img src={require(`../../assets/img/${props.img}`)} alt={props.img}></img>
    </div>
  )
}