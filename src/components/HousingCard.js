import '../styles/HousingCard.css'
import img from '../assets/housing-card.png'


function HousingCard(props) {
    const housing = props.housing;

    return (
        <article className='housing-card'>
            <div>
                <img src={img} alt="housing image"/>
            </div>
            {housing.title}
        </article>
    )
}

export default HousingCard