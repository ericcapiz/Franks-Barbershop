import {Link} from 'react-router-dom'
import './header.css';

const Header = () => {
    return (
        <header>
        <div className="container">
            <div className="inner-content">
                <div className="brand">
                    <Link to="/"><h1>Francisco's Barber Shop</h1></Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/barbers">Barbers</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>

                    <li>
                        <Link to="/testimonials" className="btn">Testimonials</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="btn">Contact Us</Link>
                    </li>
                </ul>

            </div>
        </div>
    </header>
    )
}

export default Header
