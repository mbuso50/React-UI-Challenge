import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import Button from './Button';
import Section from './Section';
import './components.css';
import coffeeCup from '../assets/Coffee_Cup-Hero-removebg-preview.png';
import serviceImage1 from '../assets/ourservice-image_bgRemoved.jpg';
import serviceImage2 from '../assets/ourservice-image2_bgRemoved.jpg';
const MobileDesign = () => {
    return (
        <Section
            title="Mobile App Preview"
            subtitle={undefined}
            className="mobile-section"
            containerClass="mobile-container"
        >
            <div className="mobile-app-container">

                <div className="mobile-frames">
                    <div className="mobile-frame-wrapper">

                        <div className="mobile-frame light-theme">
                            <div className="mobile-screen">
                                <div className="mobile-notch"></div>

                                <div className="mobile-app-bar">
                                    <button className="hamburger-menu">
                                        <FontAwesomeIcon icon={faBars} />
                                    </button>
                                    <span className="app-title">Coffee Mug</span>
                                    <div className="app-bar-spacer"></div>
                                </div>
                                <div className="mobile-content hero-mobile-view">
                                    <h1 className="mobile-hero-title">The Ultimate Coffee Destination</h1>
                                    <img
                                        className="mobile-hero-image"
                                        src={coffeeCup}
                                        alt="Coffee Cup"
                                    />
                                    <Button variant="primary" size="small" className="mobile-hero-button">
                                        Coffee Shop
                                    </Button>
                                    <div className="mobile-hero-icons">
                                        <FontAwesomeIcon icon={faBars} className="mobile-icon" />
                                        <FontAwesomeIcon icon={faBars} className="mobile-icon" />
                                        <FontAwesomeIcon icon={faBars} className="mobile-icon" />
                                        <FontAwesomeIcon icon={faBars} className="mobile-icon" />
                                    </div>
                                </div>
                                <div className="home-indicator"></div>
                            </div>
                        </div>


                        <div className="mobile-frame light-theme">
                            <div className="mobile-screen">
                                <div className="mobile-notch"></div>
                                <div className="mobile-content our-service-mobile">
                                    <h2 className="mobile-service-title">Our Coffee Selection</h2>
                                    <div className="mobile-service-cards">
                                        <div className="mobile-service-card">
                                            <img
                                                src={serviceImage1}
                                                alt="Espresso"
                                                className="mobile-service-image"
                                            />
                                            <h3>Espresso</h3>
                                            <p>A strong and rich coffee brewed by forcing hot water through finely ground coffee beans.</p>
                                            <Button variant="primary" size="small">
                                                R 29
                                            </Button>
                                        </div>
                                        <div className="mobile-service-card">
                                            <img
                                                src={serviceImage2}
                                                alt="Cappuccino"
                                                className="mobile-service-image"
                                            />
                                            <h3>Cappuccino</h3>
                                            <p>A classic Italian coffee featuring equal parts espresso, steamed milk, and frothy milk foam.</p>
                                            <Button variant="primary" size="small">
                                                R 35
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-indicator"></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="app-content">
                    <h3>Our Mobile App Available Now</h3>
                    <p>
                        Download our app to order your favorite coffee drinks,
                        earn rewards, and discover exclusive offers. Available
                        on both iOS and Android platforms.
                    </p>
                    <div className="app-store-badges">
                        <a href="#" className="store-badge apple">
                            <FontAwesomeIcon icon={faApple} className="store-icon" />
                            <div className="store-text">
                                <span className="small-text">Download on the</span>
                                <span className="large-text">App Store</span>
                            </div>
                        </a>
                        <a href="#" className="store-badge google">
                            <FontAwesomeIcon icon={faGooglePlay} className="store-icon" />
                            <div className="store-text">
                                <span className="small-text">Get it on</span>
                                <span className="large-text">Google Play</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default MobileDesign;