import '../styles/pages/completed.css'
import { useSelector } from 'react-redux'
import { getUniqueBasketProductsWithCount } from '../lib/basketProductsFunc'
import { TiTick } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeProducts } from '../redux/features/basket/basketProducts'
import { setDisableDiscount } from '../redux/features/basket/totalPrice'

const Completed = () => {
  const dispatch = useDispatch();
  const { basketProducts } = useSelector((state) => state.basketProducts);
  const { totalPrice } = useSelector((state) => state.totalPrice)

  const products = getUniqueBasketProductsWithCount(basketProducts)

  const handleClick = () => {
    dispatch(removeProducts([]))
    dispatch(setDisableDiscount(totalPrice))
  }

  return (
    <div className="completed-container">
      <div className='cc-info-box'>
        <p className='cc-i-b-title'>Siparişiniz Alınmıştır</p>
        <TiTick size={48} color='#00b894' />
        <p className='cc-i-b-price'>Toplam Tutar: {totalPrice} TL</p>
        <p>Siparişleriniz:</p>
      </div>
      <div className='cc-product-container'>
        {products.map((product, index) => (
          <div key={index} className="cc-pc-box">
            <img src={product.img} alt={product.title} />
            <p>Beden: {product.size}</p>
            <p>Adet: {product.count}</p>
          </div>
        ))}
      </div>
      <Link onClick={handleClick} to={'/'} className='cc-button'>
        <span>Alışverişe Devam Et</span>
      </Link>
    </div>
  )
}

export default Completed