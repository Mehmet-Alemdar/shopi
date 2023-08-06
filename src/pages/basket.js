import '../styles/pages/basket.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getUniqueBasketProductsWithCount, getTotalPrice } from '../lib/basketProductsFunc';
import { setTotalPrice, setDiscoentPrice, setDisableDiscount } from '../redux/features/basket/totalPrice';
import BasketProductCard from '../components/basketProductCard';
import TotalComponent from '../components/total';
import EmptyBasket from '../components/emptyBasket';

const Basket = () => {
  const dispatch = useDispatch();
  const { basketProducts } = useSelector((state) => state.basketProducts);
  const products = getUniqueBasketProductsWithCount(basketProducts)

  useEffect(() => {
    dispatch(setTotalPrice(getTotalPrice(products)))
  }, [dispatch, products])

  const handleDiscount = (isDiscounted) => {
    if(isDiscounted) {
      dispatch(setDiscoentPrice(getTotalPrice(products)))
    } else {
      dispatch(setDisableDiscount(getTotalPrice(products)))
    }
  }

  if(products.length === 0) return (
    <EmptyBasket />
  )

  return (
    <div className='basket-container'>
      <div className='bc-products-box'>
        {products.map((product, index) => (
          <BasketProductCard key={index} product={product} />
        ))}
      </div>
      <div className='bc-total-box'>
        <TotalComponent handleDiscount={handleDiscount} />
      </div>
    </div>
  )
}

export default Basket