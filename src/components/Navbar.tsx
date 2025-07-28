import Button from './Button';
import Link from './Link';
import './components.css';

const Navbar = () => (
    <header className="navbar">
        <img className="img-logo" src="/src/assets/Mug_Shoots_Logo-removebg-preview.png" alt="logo" />

        <nav>
            <ul>
                <li><Link href="#" variant="nav">Home</Link></li>
                <li><Link href="#" variant="nav">Coffee Menu</Link></li>
                <li><Link href="#" variant="nav">About Us</Link></li>
                <li><Link href="#" variant="nav">Contact Us</Link></li>
            </ul>
            <Button variant="primary" size="medium" className="btn-coffee-shop">
                Coffee Shop
            </Button>
        </nav>
    </header>
);

export default Navbar;