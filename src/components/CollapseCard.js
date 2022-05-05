import '../styles/CollapseCard.css'
import { useState } from 'react'

function CollapseCard(props) {
  const [isOpen, setIsOpen] = useState(props.isOpen);
  function toggleIsOpen(){
    setIsOpen(!isOpen)
  }

  return (
    <article className="about-card">
        <header onClick={() => toggleIsOpen()}>
          <h2>{props.title}</h2>
          {!isOpen && (<i className="las la-angle-down"></i>)}
          {isOpen && (<i className="las la-angle-up"></i>)}
        </header>

        {isOpen && (<p>{props.description}</p>)}
    </article>
  );
}

export default CollapseCard;