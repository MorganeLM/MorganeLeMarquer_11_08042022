import '../styles/HousingGrid.css'

function HousingGrid(props) {
    const housingData = props.housingData;

    return (
        <section className='housing-grid'>
            {housingData.map((housing) => (
                <article key={housing.id}>{housing.title}</article>
            ))}
        </section>
    )
}

export default HousingGrid