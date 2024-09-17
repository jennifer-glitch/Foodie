import React, { useState } from 'react'
import './Home.css'
import Header from '../../Component/Header/Header'
import Menu from '../../Component/ExploreMenu/Menu'
import { Store } from '../../Content/Store'
import Fooddisplay from '../../Content/Fooddisplay'
function Home() {
  const [category, setcategory] = useState("All")
  return (
    <div>
      <Header/>
      <Menu category={category} setcategory={setcategory}/>
      <Fooddisplay category={category}/>
    </div>
  )
}

export default Home
