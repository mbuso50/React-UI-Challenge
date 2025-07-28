import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';
import {
    faMugHot,
    faCookieBite,
    faPizzaSlice,
    faBurger
} from '@fortawesome/free-solid-svg-icons';
import './components.css';

const byPrefixAndName = {
    fas: {
        'mug-hot': faMugHot,
        'cookie-bite': faCookieBite,
        'pizza-slice': faPizzaSlice,
        'burger': faBurger
    }
};

const HeroSection = () => (
    <section className="hero-section">
        <div className="hero-text">
            <h1 className='title-hero'>The Ultimate Coffee Destination</h1>
            <Button variant="primary" size="small" onClick={(e) => console.log(e)}>
                Coffee Shop
            </Button>
            <div className='hero-icons'>
                <FontAwesomeIcon icon={byPrefixAndName.fas['mug-hot']} size="2x" />
                <FontAwesomeIcon icon={byPrefixAndName.fas['cookie-bite']} size="2x" />
                <FontAwesomeIcon icon={byPrefixAndName.fas['pizza-slice']} size="2x" />
                <FontAwesomeIcon icon={byPrefixAndName.fas['burger']} size="2x" />
            </div>
        </div>
        <img className='hero-image' src="../assets/Coffee_Cup-Hero-removebg-preview.png" alt="Hero Coffee Cup" />
    </section>
);

export default HeroSection;
