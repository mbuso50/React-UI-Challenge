import './components.css';
import Button from './Button';
function Trending() {
  return (
    <div className='container-of-trending'>
      <div className='content-and-image'>
        <div className='content-trending'>
          <h1>Discover Your Perfect Brew</h1>
          <p>Explore the rich aromas and bold flavors of our carefully sourced coffee blends.</p>
          <Button variant="primary" size="small" onClick={(e) => console.log(e)}>
            Explure
          </Button>
        </div>
        <div className='image-trending'>
          <img
            className='hero-image'
            src="/src/assets/latte_bg-removed.jpg"
            alt="Hero Coffee Cup"
          />
          <div className='price-badge'>R35</div>
        </div>
      </div>
    </div>
  )
}

export default Trending;
