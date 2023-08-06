import '../styles/components/emptyBasket.css'
import {BsEmojiDizzy} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const EmptyBasket = () => {
  return (
    <div className="empty-basket">
      <h2>Sepetiniz hiç ürün yok</h2>
      <BsEmojiDizzy size={50} />
      <Link to='/' className='empty-basket-link'>Ürünleri Gör</Link>
    </div>
  )
}

export default EmptyBasket