import '../styles/components/basket.css'
import { SlBasket } from "react-icons/sl";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Basket = () => {
  const { basketProducts } = useSelector((state) => state.basketProducts);
  const count = basketProducts.length;


  return (
    <Link to="/basket" className="basket-box">
      <div className="bb-count">{ count > 0 && count }</div>
      <SlBasket size={24}/>
    </Link>
  )
}

export default Basket