import Link from './Link';
import './components.css';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-wrapper'>
                <img className='img-logo-footer' src="/Mug_Shoots_Logo-removebg-preview.png" alt="logo" />
                <div className='footer-links'>

                    <div className='footer-column'>
                        <h3 className='footer-heading'>Our Service</h3>
                        <ul className='footer-list'>
                            <li><Link href="/coffee-blends" variant="default">Coffee Blends</Link></li>
                            <li><Link href="/subscriptions" variant="default">Subscriptions</Link></li>
                            <li><Link href="/merchandise" variant="default">Merchandise</Link></li>
                            <li><Link href="/brewing-guides" variant="default">Brewing Guides</Link></li>
                        </ul>
                    </div>


                    <div className='footer-column'>
                        <h3 className='footer-heading'>Our Company</h3>
                        <ul className='footer-list'>
                            <li><Link href="/about-us" variant="default">About Us</Link></li>
                            <li><Link href="/careers" variant="default">Careers</Link></li>
                            <li><Link href="/sustainability" variant="default">Sustainability</Link></li>
                            <li><Link href="/press" variant="default">Press</Link></li>
                        </ul>
                    </div>


                    <div className='footer-column'>
                        <h3 className='footer-heading'>Our Address</h3>
                        <ul className='footer-list'>
                            <li><Link href="/locations" variant="default">Store Locations</Link></li>
                            <li><Link href="/contact" variant="default">Contact Us</Link></li>
                            <li><Link href="/hours" variant="default">Business Hours</Link></li>
                            <li><Link href="/directions" variant="default">Get Directions</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;