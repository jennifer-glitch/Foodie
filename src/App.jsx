import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Header from './Component/Navbar'
// import Hero from './Component/Hero'
// import Product from './Component/Product'
// import { products } from './Component/Data'
import "bootstrap"
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/PlaceOrder/Placeorder'
import Navbar from './Component/Navbar'
// import Login from './Component/login'
import Login from './Component/Login'
import Fooster from './Pages/Home/Fooster'
function App() {
  const [showlogin, setShowlogin] = useState(false)

  return (
    <>
    {showlogin?<Login setShowlogin={setShowlogin}/>:<></>}
      <div>
      <Navbar setShowlogin={setShowlogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<Placeorder/>} />
      </Routes>

      <Fooster/>
      </div>
      {/* <div className="row">
        {products.map((product)=>{
       return(
        <>
        <Product 
       id={product.id}
       name={product.name}
       price={product.price}
       img={product.img}/>
        </>
       )
        })}
      </div> */}
    </>
  )
}

export default App
