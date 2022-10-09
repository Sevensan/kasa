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
      <p onClick={prevSlide} className="arrow prev"> {'<'} </p>
      <img src={pictures[slideNumber]} key={slideNumber} alt={slideNumber} />
      <p onClick={nextSlide} className="arrow next"> {'>'} </p>
    </div>
  )
}