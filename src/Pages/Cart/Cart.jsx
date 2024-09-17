import React, { useContext, useEffect,} from 'react'
import { Store } from '../../Content/Store'
import { Cancel } from '@mui/icons-material'
// import { foodlist } from '../../assets/asset'
// import contextValue from '../../Content/Store'

function Cart() {
  const {cartItems, foodlist, removeFromCart} = useContext(Store)
  // useEffect (() => {
  //   foodlist.map((name) => {
  //     console.log(name.id);
  //   });

  // }, [])

  return (
    <div className='h'>
      <div className="mt-28">
        <div className="grid items-center text-gray-950 text-xs font-bold cartitems" id='cart'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        {/* <br /> */}
        <hr className='h-1/2 cartitems'/>
       
        {foodlist.map((item, index)=> {
            if(cartItems[item.id]>0)
              {
               return(
                <div className="h-1/2">
                 <div className="grid items-center text-black font-semibold cartitems" id='cart'>
                  <img src={item.img} alt="" className='w-14 h-14 rounded-3xl'/>
                   <p>{item.name}</p>
                   <p>${item.price}</p>
                   <p>{cartItems[item.id]}</p>
                   <p>${item.price*cartItems[item.id]}</p>
                   <Cancel className='cursor-context-menu text-slate-700' onClick={()=>removeFromCart(item.id)}/>
                 </div>
                 <hr className='hr cartitems'/>
                </div>
               )
              }
              else{
                <>
                <p> inva lid</p>
                </>
              }
             })}  

      </div>
      <div className="cartbottom mt-24 flex justify-between cartitems">
        <div className="carttotal flex-col gap-5">
          <h2>Cart Totals</h2>
          <div className="">
            <div className="cartdetails flex justify-between">
              <p>Subtotal</p>
              
            </div>
            <hr className='hr1'/>
            <div className="cartdetails flex justify-between">
              <p>Delivery Fees</p>
              <p>{2}</p>
            </div>
            <hr className='hr1'/>
            <div className="cartdetails flex justify-between">
              <b>Total</b>
              {/* <b>{getTotalCartAmount()+2}</b> */}
            </div>
          </div>
            <button className='button text-white '>PROCEED TO CHECKOUT</button>
        </div>
        <div className="flex-1 code">
          <div className=""><p>If you have a promocode, Enter it here</p></div>
          <div className="input mt-3 flex justify-between items-center">
            <input type="text" placeholder='promo code'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
