import '../../styles/Accordion.scss'
import { useState } from 'react'

export default function Accordion (props) {
    const content = props.content
    const [accordionStatus, setAccordionStatus] = useState(false)
    const handleAccordion = () => setAccordionStatus(!accordionStatus)

    return (
      <div className='accordion'>
        <p onClick={handleAccordion} className="accordion-title">{ content.title } <img src={require("../../assets/img/Vector.png")} className={accordionStatus ? 'opened' : 'closed'} onClick={handleAccordion} />
        </p>
        {
          accordionStatus &&
          <div className='accordion-description'>
            { typeof content.description === 'object' ?
              content.description.map(desc => <p>{ desc }</p>)
            : <p>{ content.description }</p>
            }
          </div>
        }
      </div>
    )
  }