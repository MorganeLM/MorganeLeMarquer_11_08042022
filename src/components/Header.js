import { Link } from 'react-router-dom'
import '../styles/Header.css'
import logo from '../assets/logo/logo.PNG'
 
function Header() {
    return (
        <nav className='header-nav'>
             <Link to="/" className='header-nav-logo'>
                 <img src={logo} alt='logo de Kasa'/>
             </Link>
            
            <div className='header-nav-link'>
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </div>
        </nav>
    )
}

export default Header