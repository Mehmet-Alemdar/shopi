import '../styles/components/basketProductCard.css'

const BasketProductCard = ({ product}) => {
  return (
    <div className='basket-prodcut-container'>
    <div className='bpc-info'>
      <img src={product.img} alt={product.title} />
      <div className='bpc-i-info'>
        <div className='bcp-i-i-detail'>
          <p>Beden: {product.size}</p>
          <div className='pc-pb-i-i-d-count'>
            <p>Adet: {product.count}</p>
          </div>
          <p>Fiyat: {product.price} TL</p>
        </div>
        <div className='bc-pb-i-description'>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BasketProductCard