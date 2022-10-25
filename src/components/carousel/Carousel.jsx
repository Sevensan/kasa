import '../../styles/Carousel.scss'
import { useState } from 'react'

export default function Carousel(props) {
  const pictures = props.pictures
  const [slideNumber, setSlideNumber] = useState(0)
  const nextSlide = () => {
    slideNumber === (pictures.length - 1) ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
  }
  const prevSlide = () => {
    slideNumber === 0 ? setSlideNumber(pictures.length - 1) : setSlideNumber(slideNumber - 1)
  }
  return (
    <div className='carousel'>
      {
      pictures.length > 1 &&
      <div className='arrows'>
        <img src={require('../../assets/img/arrow-left.png')} onClick={prevSlide} className="arrow prev" alt="arrow" />
        <img src={require('../../assets/img/arrow-next.png')} onClick={nextSlide} className="arrow next" alt="arrow" />
      </div>
      }
      <img src={pictures[slideNumber]} key={slideNumber} alt={slideNumber} />
    </div>
  )
}