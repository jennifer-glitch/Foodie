import React from 'react'

function Header() {
  return (
    <div className='mt-28' id='head'>
      <div className="flex flex-col items-start bottom-80 left-96 ml-32 pt-32" id='headcon'>
        <h2 className='text-red-800 font-bold font-serif text-6xl min-w-80:p-11  mt-2'>Order Your Favourite Food Here</h2>
        <p className='font-semibold text-black pt-2 text-xl'>Chooose from a diverse menu feature a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
     {/* <button className='bg-pink-600 text-white h-10 w-28 text-sm font-medium rounded font-[poppins]'>View Menu</button> */}
      </div>
    </div>
  )
}

export default Header
