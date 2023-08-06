import '../styles/pages/home.css';
import DATA from '../data/products.json';
import Basket from '../components/basket';
import ProductCard from '../components/productCard';

function Home() {
  const products = Object.values(DATA.products[0])

  return (
    <div className="home">
      <div className='home-head'>
        <Basket />
      </div>
      <div className='home-body'>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
