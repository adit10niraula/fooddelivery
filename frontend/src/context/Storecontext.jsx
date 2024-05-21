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

    useEffect(()=>{
        console.log(cartitems)

    },[cartitems])




    const contextValue = {
        food_list,
        cartitems,
        setcartitems,
        addToCart,
        removeFromCart
    

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