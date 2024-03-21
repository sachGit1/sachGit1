import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlinePlus } from 'react-icons/ai'
import { getAllProduct } from '../../redux/product/product.action';

import AddProductModal from './AddProductModal';

import ProductTable from './ProductTable'



function ProviderProducts() {
  const provider = useSelector((state) => state.provider.provider);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProduct(provider._id));
  }, [dispatch, provider._id]);
  const [addProductModal, setAddProductModal] = useState(false);

  return (
    <>
      <div className='flex justify-between p-2'>
        <div>
          <h1 className='font-semibold text-xl'>Manage Designs</h1>
        </div>
        <button className='border bg-green-700 flex items-center gap-1 text-white px-2 py-1 rounded' onClick={() => setAddProductModal(true)}>
          <AiOutlinePlus />
          <span>Add Designs</span>
        </button>
      </div>

      <div className='py-3 px-3'>
        <AddProductModal open={addProductModal} setOpen={setAddProductModal} />
        <ProductTable addProductModal={addProductModal} setAddProductModal={setAddProductModal} />
      </div>
    </>
  )
}

export default ProviderProducts
