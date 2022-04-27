import '../styles/HousingCard.css'

function HousingCard(props) {
    const housing = props.housing;

    return (
        <article className='housing-card'>
            <div>
                <img src={housing.cover} alt="housing image"/>
            </div>
            {housing.title}
        </article>
    )
}

export default HousingCard