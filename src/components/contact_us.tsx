
import Button from './Button';
import './components.css';

function Contact_us() {
    return (
        <div className='contact-us-container'>
            <div className='heading-and-btn'>
                <div className='contact-text'>
                    <h4 className='contact-subheading'>Let's Talk</h4>
                    <h2 className='contact-heading'>Want to Reserve a Table?</h2>
                </div>
                <Button variant="primary" size="large" className='btn-contact-now'>
                    Contact Now
                </Button>
            </div>
            <div className='divider-line'></div>
            <div className='terms-and-conditions'>
                <p className='contact-info'>
                    Open daily from 8am to 10pm |
                    Phone: (011) 456-7890 |
                    Email: contact@mugshoots.com |
                    123 Coffee Street, Bean City
                </p>
            </div>
        </div>
    );
}

export default Contact_us;