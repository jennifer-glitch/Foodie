import { createContext, useEffect, useState } from "react";
import { foodlist } from "../assets/asset";
export const Store = createContext(null)

const StoreProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    }
    else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
  }
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {

        let itemInfo = foodlist.find((product) => product.name === item);
        if (itemInfo) {
          
          totalAmount += itemInfo.price * cartItems[item];
        } else{
          console.warn(`product not found for id: ${item}`)
        }
        // console.log(ty)
      }
    }
    return totalAmount;
  }

  // useEffect(()=>{
  //   foodlist.map((name)=>{
  //       });
  // }, [cartItems])

  const contextValue = {
    foodlist,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  }
  return (
    <Store.Provider value={contextValue}>
      {props.children}
    </Store.Provider>
  )
}

export default StoreProvider 