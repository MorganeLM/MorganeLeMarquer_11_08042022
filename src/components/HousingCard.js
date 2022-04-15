import '../styles/HousingCard.css'


function HousingCard(props) {
    const housing = props.housing;

    return (
        <article>
            {housing.title}
        </article>
    )
}

export default HousingCard