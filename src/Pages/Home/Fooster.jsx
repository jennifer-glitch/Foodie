import { Facebook, Twitter, WhatsApp } from '@mui/icons-material'
import React from 'react'
import { FaFacebook, FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa6'

function Fooster() {
  return (
    <div className="mt-28" id='fooster'>
      <section class="text-white body-font">
  <div class=" px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -my-8">
      <div class="py-8 px-4 lg:w-1/2">
        <div class="h-full flex items-start">
          <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            {/* <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">FOODIE</span> */}
            {/* <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span> */}
          </div>
          <div class=" pl-6">
            {/* <h2 class="tracking-widest text-xs title-font font-medium text-blue-500 mb-1">CATEGORY</h2> */}
            <h1 class="title-font text-4xl font-semibold text-orange-600 mb-3">FOODIE</h1>
            <p class="leading-relaxed mb-5">Lorem is simply one dummy text of the printing and typesetting industry. Lorem has been and industry's standard dummy text ever seen in the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type of specimen book</p>
            <a class="inline-flex items-center">
              <span class="flex-grow flex flex-col pl-3">
                <span class="title-font font-medium text-gray-900 flex gap-4"> <FaFacebookF className='border-red-500 hover:text-orange-600 w-9 h-8 rounded-2xl cursor-pointer text-orange-400'/>
                     <FaWhatsapp className='border-red-500 hover:text-orange-600 w-9 h-8 rounded-2xl cursor-pointer text-orange-400'/>
      <FaTwitter className='border-red-500 hover:text-orange-600 w-9 h-8 rounded-2xl cursor-pointer text-orange-400'/></span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="py-8 px-4 lg:w-1/3">
        <div class="h-full flex items-start">
          <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            {/* <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
            <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span> */}
          </div>
          <div class="flex-grow pl-6">
            {/* <h2 class="tracking-widest text-xs title-font font-medium text-blue-500 mb-1">CATEGORY</h2> */}
            <h1 class="title-font text-2xl font-medium text-white mb-3">COMPANY</h1>
            <p class="leading-relaxed mb-5"><ul className='mb-3 cursor-pointer '>
          <li className='hover:text-orange-500'>Home</li>
          <li className='hover:text-orange-500'>About</li>
          <li className='hover:text-orange-500'>Delivery</li>
           <li className='hover:text-orange-500'>privacy policy</li>
       </ul></p>
            <a class="inline-flex items-center">
              {/* <img alt="blog" src="https://dummyimage.com/102x102" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"> */}
              <span class="flex-grow flex flex-col pl-3">
                {/* <span class="title-font font-medium text-gray-900">Holden Caulfield</span> */}
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="py-8 px-4 lg:w-1/3">
        <div class="h-full flex items-start">
          <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            {/* <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
            <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span> */}
          </div>
          <div class="flex-grow pl-6">
            {/* <h2 class="tracking-widest text-xs title-font font-medium text-blue-500 mb-1">GET IN TOUCH</h2> */}
            <h1 class="title-font text-2xl font-medium text-white mb-3">GET IN TOUCH</h1>
            <p class="leading-relaxed mb-5">
              <ul className="mb-3">
             <li>010-6504-5473</li>
             <li>jenny@email.com</li>
         </ul>
         </p>
            <a class="inline-flex items-center">
              {/* <img alt="blog" src="https://dummyimage.com/101x101" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"> */}
              <span class="flex-grow flex flex-col pl-3">
                {/* <span class="title-font font-medium text-gray-900">Henry Letham</span> */}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  //   <div className='text-white mt-20 flex flex-col items-center gap-5  p-5 pt-28' id='fooster'>
  //     <div className="w-[100%] grid grid-cols-3 gap-24" id=''>
  //       <div className="flex flex-col items-start gap-5">
  //  <span className="text-orange-600 text-4xl font-semibold">FOODIE</span>
  //  <p>Lorem is simply one dummy text of the printing and typesetting industry. Lorem has been and industry's standard dummy text ever seen in the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type of specimen book</p>
  //    <div className="flex gap-3">
  //       <FaFacebookF className='border-red-500 hover:text-orange-600 w-9 h-8 rounded-2xl cursor-pointer text-orange-400'/>
  //       <FaWhatsapp className='border-red-500 hover:text-orange-600 w-9 h-8 rounded-2xl cursor-pointer text-orange-400'/>
  //       <FaTwitter className='border-red-500 hover:text-orange-600 w-9 h-8 rounded-2xl cursor-pointer text-orange-400'/>
  //       </div>  
  //       </div>
  //       <div className="flex flex-col items-start gap-5">
  //       <h2 className="">COMPANY</h2>
  //       <ul className='mb-3 cursor-pointer '>
  //           <li className='hover:text-orange-500'>Home</li>
  //           <li className='hover:text-orange-500'>About</li>
  //           <li className='hover:text-orange-500'>Delivery</li>
  //           <li className='hover:text-orange-500'>privacy policy</li>
  //       </ul>
  //       </div>
  //       <div className="flex flex-col items-start gap-5">
  //       <h2 className="">GET IN TOUCH</h2>
        // <ul className="mb-3">
        //     <li>010-6504-5473</li>
        //     <li>jenny@email.com</li>
        // </ul>
  //       </div>
  //     </div>
  //     <hr className='' />
  //     <p className="">Copyright 2024 Foodie.com - All Right Reserved.</p>
  //   </div>
  )
}

export default Fooster
