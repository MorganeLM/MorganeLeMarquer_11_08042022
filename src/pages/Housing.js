import { useParams } from 'react-router-dom'

function HousingCard() {
  const data = useParams()
  console.log(data)
    return (
      <article className="Housing">
        <h2>Titre du logement</h2>
      </article>
    );
  }
  
  export default HousingCard;