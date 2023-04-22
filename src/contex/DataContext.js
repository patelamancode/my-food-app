import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "./Db";

export const FoodDataContext = createContext();

export const FoodDataContextProvider = ({children})=>{

    const [foodData, setFoodData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [cartItem, setCartItem] = useState([]);

    const getData = async () =>{
        setIsLoading(true)
        try{
            const res = await fakeFetch('https://example.com/api/menu')
            if(res.status === 200){
                setFoodData(res.data.menu)
                setIsLoading(false)
            }
        }
        catch(error){
            console.log(error.message);
        }
    }
    useEffect(()=>{
        getData();
    },[])


    const selectedItemToCart = (selectedId) =>{
        const userItem = foodData.find((item)=> (item.id === selectedId));
        setCartItem((cartItem) =>[...cartItem, userItem])
    }





    return(
        <FoodDataContext.Provider value={{foodData, isLoading, selectedItemToCart, cartItem}}>
            {children}
        </FoodDataContext.Provider>
    )
}