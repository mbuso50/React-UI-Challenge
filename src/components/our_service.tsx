import Button from './Button'
import './components.css';

import serviceImage1 from '../assets/ourservice-image_bgRemoved.jpg';
import serviceImage2 from '../assets/ourservice-image2_bgRemoved.jpg';

function OurService() {
    return (
        <div className="service-container">
            <div className="content-container">

                <div className="side-boxes-wrapper">
                    <div className="side-box1">
                        <img
                            className="our-service-image1"
                            src={serviceImage1}
                            alt="Espresso"
                        />
                        <h3>Espresso</h3>
                        <p>
                            A strong and rich coffee brewed by forcing hot water through finely ground coffee beans. Perfect for a quick energy boost.
                        </p>
                        <Button variant="primary" size="medium" onClick={(e) => console.log(e)}>
                            R 29
                        </Button>
                    </div>

                    <div className="side-box2">
                        <img
                            className="our-service-image2"
                            src={serviceImage2}
                            alt="Cappuccino"
                        />
                        <h3>Cappuccino</h3>
                        <p>
                            A classic Italian coffee featuring equal parts espresso, steamed milk, and frothy milk foam.
                        </p>
                        <Button variant="primary" size="medium" onClick={(e) => console.log(e)}>
                            R 35
                        </Button>
                    </div>
                </div>

                <div className="content-btn">
                    <h2>Our Type of Coffee and Latte</h2>
                    <p className="coffee-description">
                        Discover our carefully selected <strong>premium coffee blends</strong> and <em>handcrafted artisan lattes</em> that cater to every palate.
                        From <span className="highlight">bold single-origin espressos</span> to <span className="highlight">velvety smooth cappuccinos</span>,
                        each cup is meticulously prepared by our certified baristas using locally sourced, organic ingredients.
                    </p>
                    <Button variant="primary" size="small" onClick={(e) => console.log(e)}>
                        Learn More
                    </Button>
                </div>

            </div>
        </div>
    );
}

export default OurService;
