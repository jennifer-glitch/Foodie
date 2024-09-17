import React, { useContext } from 'react'
import { Store } from './Store'
import Fooditem from './Fooditem'

function Fooddisplay({category}) {
    const {foodlist}= useContext(Store)
  return (
    <div className='mt-20' id=''>
      <h2 className="font-semibold font text-5xl">Top dishes near you</h2>
      
    <div className="grid">
        {foodlist.map((item, index)=>{
          if (category==="All" || category===item.category) {
            return <Fooditem key={index} id={item.id} name={item.name} description={item.description} price={item.price} img={item.img} rate={item.rate}/>
          }
      
        })}
    </div>
    </div>
  )}


export default Fooddisplay
