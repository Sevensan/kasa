import '../../styles/Accordion.scss'
import { useState } from 'react'

export default function Accordion (props) {
    const [accordionStatus, setAccordionStatus] = useState(false)
    const handleAccordion = () => setAccordionStatus(!accordionStatus)

    return (
      <div className='accordion'>
        <p onClick={handleAccordion}>{ props.title } <span className="accordion-arrow" onClick={handleAccordion}>{'<'}</span></p>
        {
          accordionStatus &&
          <div>
            <p>{ props.description }</p>
          </div>
        }
      </div>
    )
  }