import '../../../styles/Stars.scss'

export default function Stars(props) {
  const stars = []
  for (let i = 0; i < 5; i++) {
    if ( i < props.rating ) {
      stars.push(<img src={require('../../../assets/img/star-full-ah.png')} alt='star full' className='star-full'></img>)
    }
    else {
      stars.push(<img src={require('../../../assets/img/star-empty.png')} alt='star empty' className='star-empty'></img>)
    }
  }
  return (
    <div className='stars'>
      { stars }
    </div>
  )
}