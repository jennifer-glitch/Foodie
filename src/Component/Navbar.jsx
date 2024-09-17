import React, { useState } from 'react'
import { IoCart, IoCartOutline } from 'react-icons/io5'
import food from "../Component/food.png"
import { BiSearch } from 'react-icons/bi'
import { FaBasketShopping } from 'react-icons/fa6'
import { PiBowlFood } from 'react-icons/pi'
import { BsCart2 } from 'react-icons/bs'
import { Box, Drawer, ListItem, ListItemText, ListItemIcon, ListItemButton } from '@mui/material'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { Home, Menu, PhoneRounded} from '@mui/icons-material'
import { Info } from '@mui/icons-material'
import { CommentRounded } from '@mui/icons-material'
import { ShoppingCart } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function Navbar({setShowlogin}) {
  const  [openMenu, setOpenMenu]= useState(false)
  const option = [
    {
    text:"Home",
    icon:<Home/>   
  },
  {
    text:"Menu",
    icon:<Menu/>
  },  
   {
    text:"About",
    icon:<Info/>
    
  }, 
  {
    text:"Contact",
    icon:<PhoneRounded/>
  },
  
  
  ]
  return (
   <div className="shadow-md fixed top-0 left-0 w-full z-[100]" >
    <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 ">
    <div className="container">
      <Link to='/'><span className='text-3xl text-pink-700 mr-1 pt-1 font-bold mt-1'>FOODIE</span></Link>
    </div>
    <div onClick={()=>setOpenMenu(!openMenu)} className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden">
      <ion-icon name={ openMenu ? 'close': 'menu'}></ion-icon>
    </div>
    <div className={`md:flex md:items-center list-none md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 ${openMenu ? 'top-7':'top-[-490px]'}`}>
    {
      option.map((j)=>(
        <li key={option.text} className='md:ml-8 text-xl md:my-0 my-7 no-underline  hover:text-red-700'>
          <a href="" className='no-underline text-black font-semibold  hover:text-red-700'>{j.text}</a>
        
        </ li> 
      ))
    }
    <Link to='/cart'><ShoppingCart className='gap-7 md:ml-8 '/></Link>
    <button onClick={()=>setShowlogin(true)} className="bg-red-800 mt-2 font-[poppins] py-2 px-6 rounded md:ml-8 hover:bg-red-700 duration-100 text-white w-28">SIGN UP</button>
     </div>
     </div>
    </div>
   
  )
}

export default Navbar
 