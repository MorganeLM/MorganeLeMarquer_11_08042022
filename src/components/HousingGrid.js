import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../styles/HousingGrid.css'
import HousingCard from "../components/HousingCard";



function HousingGrid() {
    const [housingData, loadData] = useState([])
    
    useEffect(() => {
        fetch('logements.json').then(response => {
            return response.json();
            }).then(data => {
                loadData(data);
            }).catch(err => {
                console.log(err);
            });
        }, [])

    return (
        <section className='housing-grid'>
            {housingData.map((housing) => (
                <Link to={ `/housing/${housing.id}` } key={housing.id}>
                    <HousingCard  housing={housing} />
                </Link>
            ))}
        </section>
    )
}

export default HousingGrid