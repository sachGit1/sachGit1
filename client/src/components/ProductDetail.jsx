import React from 'react'
import { useSelector } from 'react-redux';

function ProductDetail() {
  const productData = useSelector((state) => state.products.product);
  return (
    <>
      {productData && <div className='pb-4'>
        <div className='productImage' style={{height:'380px'}}>
          <img src={productData.image} alt={productData.name} className='h-full w-full rounded-lg overflow-hidden'/>
        </div>
          <div className= 'flex flex-col gap-4 py-4 h-40'>
            <h3 className='font-semibold'>{productData.name}</h3>
            <h6 className='font-semibold'>Price: <span className='text-slate-900 font-normal'>₹{productData.price}/product</span></h6>
            <p className='font-semibold'>Quantity Left: <span className='font-normal'>{productData.quantity}</span></p>
            <h6 className='font-medium'>Description :</h6>
            <p className='text-gray-500'>{productData.description}</p>
          </div>
        </div>}
    </>
  )
}

export default ProductDetail