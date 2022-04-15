import '../styles/Banner.css'
import banner from '../assets/home-banner.png'

function Banner() {
    return (
        <section className='banner'>
            <img src={banner} alt='home background'/>
            <h1>Chez vous, partout et ailleurs</h1>
        </section>
    )
}

export default Banner