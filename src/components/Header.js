import { Link } from 'react-router-dom'
import '../styles/Header.css'
import logo from '../assets/logo/logo.png'
 
function Header() {
    return (
        <header className='header-nav'>
             <Link to="/" className='header-nav-logo'>
                 <img src={logo} alt='logo de Kasa'/>
             </Link>
            
            <nav className='header-nav-link'>
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </nav>
        </header>
    )
}

export default Header