import '../../styles/Banner.scss'

export default function Banner(props) {
  return (
    <div className='banner'>
      <img src={require(`../../assets/img/${props.img}`)} alt={props.img}></img>
    </div>
  )
}