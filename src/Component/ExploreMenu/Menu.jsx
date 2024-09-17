import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
// import { menu } from '../../assets/asset';

// import { menu } from '../../assets/asset'

export const menu =[
  {
      name:"Salad",
      img:"/images/salad.jpg"
  },
  {
      name:"Rolls",
      img:"/images/roll.jpg"
  },
  {
    name:"Noodles",
    img:"/images/noodle2.jpg"
  },
  {
      name:"Sandwich",
      img:"/images/wish.webp"
  },
  {
    name:"Cake",
      img:"/images/desert1.jpg"
  },
    {
        name:"Ice-Cream",
         img:"/images/ice1.jpg"
     },
  
  {
      name:"Pasta",
      img:"/images/pas.jpeg"
  },
]

// import React, { Component } from "react";
// import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", color:"black"}}
      onClick={onClick}
    />
  );
}
function Menu({category, setcategory}) {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   nextArrow:<SampleNextArrow/>,
  //   prevArrow: <SamplePrevArrow/>
    
  // };
  return (
  //   <div className='bg'>
  //   <div className='w-3/4 m-auto'>
  //     <h1 className='font-semibold1'>Eplore Our Menu</h1>
  //  <div className="mt-20">
  //   <Slider {...settings} >
  //   {menu.map((item, index)=>(
  //     <div onClick={()=>setcategory(prev=>prev==item.name?"All": item.name)} key={index} className="">
  //       <div className="rounded-t-xl" id='img1'>
  //         <img src={item.img} alt="" className='h-44 w-44 rounded-full cursor-pointer ' id={category===item.name? "active": ""}/>
  //       </div>
  //       <div className="">
  //         <p className='font-semibold mt-2 pl-10'>{item.name}</p>
  //       </div>
  //     </div>
  //   ))}
  //   </Slider>
  //  </div>
  //   </div>
  //   </div>





    <div className='flex flex-col gap-5' id='expmenu'>
      <h1>Explore our Menu</h1>
      {/* <p className='menu-text'>Choose your choice</p> */}
      <div className="flex justify-between items-center gap-7 text-center overflow-x-scroll itemslist1">
        {menu.map((item, index)=>{
            return (
                <div key={index} className="itemslist2" onClick={()=>setcategory(prev=>prev==item.name?"All": item.name)}>
                <img src={item.img} alt="" className=' itemslist cursor-pointer ' id={category===item.name? "active": ""}/>
                <p>{item.name}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Menu
