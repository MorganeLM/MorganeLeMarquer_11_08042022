import '../styles/HousingCard.css'

function HousingCard(props) {
    const housing = props.housing;

    return (
        <article className='housing-card'>
            <img src={housing.cover} alt=''/>
            <h3>{housing.title}</h3>
            <div className='housing-card-filter'></div>
        </article>
    )
}

export default HousingCard