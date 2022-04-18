import '../styles/Banner.css'

function Banner(props) {
    return (
        <section className='banner'>
            <img src={props.img} alt=''/>
            <h1>{props.title}</h1>
        </section>
    )
}

export default Banner