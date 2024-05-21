import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = ({children}) =>{


    const [cartitems, setcartitems] = useState({})

    const addToCart = (itemId) => {
        console.log(itemId)
        if(!cartitems[itemId]){
            setcartitems((prev)=> ({... prev, [itemId]:1}))
        }
        else{
            setcartitems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        }


        
    }

    const removeFromCart = (itemId)=>{
        setcartitems((prev)=>({...prev, [itemId]:prev[itemId]-1}))

    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartitems){
            if(cartitems[item]>0){

                let itemInfo = food_list.find((product)=> product._id=== item)
            totalAmount += itemInfo.price * cartitems[item]
        }

            }

            return totalAmount;
            

    }

   



    const contextValue = {
        food_list,
        cartitems,
        setcartitems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    

    }

    return (
        <>
        <StoreContext.Provider value={contextValue}>

            {children}
        </StoreContext.Provider>
        </>
    )
}


export default StoreContextProvider