import '../styles/components/total.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsFillTrashFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { removeProducts } from '../redux/features/basket/basketProducts';
import {setDisableDiscount} from '../redux/features/basket/totalPrice'

const Total = ({ handleDiscount }) => {
  const dispatch = useDispatch();
  const { totalPrice, isDiscounted, totalDiscount } = useSelector((state) => state.totalPrice);

  const handleRemoveProducts = () => {
    dispatch(removeProducts([]))
    dispatch(setDisableDiscount(totalPrice))
  }

  return (
    <div className='total-container'>
      <h3>Sipariş Özeti</h3>
      <p>Ürünler Toplamı: {totalPrice + totalDiscount } TL</p>
      {isDiscounted && <p>İndirim Tutarı: {totalDiscount} TL</p>}
      {isDiscounted && <p>Toplam Tutar: {totalPrice} TL</p>}
      <Link to="/completed" className='tc-button'>
        <span>Siparişi Tamamla </span>
      </Link>
      <button
        className={isDiscounted ? 'tc-button discounted' : 'tc-button'}
        onClick={() => handleDiscount(!isDiscounted)}>
        {isDiscounted ? <span> %20 indirim uygulandı</span> : <span>%20 indirim uygula</span>}
      </button>
      <button className='tc-button clear' onClick={() => handleRemoveProducts()}>
        <BsFillTrashFill />
        <span>Sepeti Temizle</span>
      </button>
    </div>
  )
}

export default Total