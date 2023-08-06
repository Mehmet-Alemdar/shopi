import '../styles/components/productCard.css';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/features/basket/basketProducts.js';
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addProductToBasket = () => {
    dispatch(addProduct(product))
  };

  return (
    <div className='product-card'>
      <img src={product.img} alt={product.name} className='pc-ib-img'/>
      <div className='pc-info-box'>
        <p className='pc-ib-size'>{product.size}</p>
        <p className='pc-ib-price'>{product.price} TL</p>
        <button className='pc-ib-button' onClick={addProductToBasket}>add to cart</button>
        <p className='pc-ib-stock'>stock {product.stock}</p>
      </div>
    </div>
  )
};

export default ProductCard;