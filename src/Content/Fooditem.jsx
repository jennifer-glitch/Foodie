import { PlusOneOutlined } from '@mui/icons-material'
import React, { useContext } from 'react'
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci'
import { Fa6, FaPlus } from 'react-icons/fa6'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Store } from './Store';
import { useState } from 'react';

function Fooditem({id,name,rate, price, description, img}) {
  // const notify = () => {toast("Wow so easy!")
  //   toast.success("sucessfully added to cart")
  // };
  // const [itemCount, setItemCount]= useState(0)
  const {cartItems, addToCart, removeFromCart} = useContext(Store);
  return (
    <div className=' m-auto' id='fooditem'>
      <div className="fooditem">
        <img src={img} alt="" className='' id='image'/>
        { !cartItems[id]
             ? <button className='bg-red-600 py-1 px-2 text-white rounded-md font-[poppins] ml-1 h-8 mt-1' onClick={()=>addToCart(id)}>Add To Cart</button>
            //  <ToastContainer/>
          // ? <FaPlus onClick={()=>setItemCount(prev=>prev+1)}/>
          :<div className='flex gap-2'>
            <CiCirclePlus onClick={()=>addToCart(id)} className=' text-3xl rounded text-green-800'/>
            <p className='font-bold'>{cartItems[id]}</p>
            <CiCircleMinus onClick={()=>removeFromCart(id)} className='text-3xl text-red-800'/>
          </div>
        }
      </div>
      <div className="p-4">
        <div className="flex justify-between">
            <p className='text-xl font-medium'>{name}</p>
            <img src={rate} alt="" className='w-28 items-center mb-3 mt-0' />
        </div>
        <p className="text-slate-500 text-base">{description}</p>
        <p className="text-red-800 text-2xl font-medium">${price}</p>
      </div>
    </div>
  )
}

export default Fooditem
