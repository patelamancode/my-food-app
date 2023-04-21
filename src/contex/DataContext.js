import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "./Db";

export const FoodDataContext = createContext();

export const FoodDataContextProvider = ({children})=>{

    const [foodData, setFoodData] = useState([]);

    const getData = async () =>{
        try{
            const res = await fakeFetch('https://example.com/api/menu')
            if(res.status === 200){
                setFoodData(res.data.menu)
            }
        }
        catch(error){
            console.log(error.message);
        }
    }
    useEffect(()=>{
        getData();
    },[])
    return(
        <FoodDataContext.Provider value={{foodData}}>
            {children}
        </FoodDataContext.Provider>
    )
}