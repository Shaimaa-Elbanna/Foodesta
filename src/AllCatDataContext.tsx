import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export  type CiaInterface={
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}
  type CiaContextType={

      type:string  | any
params:string| any
disply:CiaInterface[]
setVariable: (Category: string, food: string) => void|undefined;


}


  type ChildProps={
    children:React.ReactNode
}


export let AllCatDataContext= createContext<CiaContextType|null> (null)

export const AllDataContextProvider=(props:ChildProps)=>{
 
    const[disply,setDisplay]=useState<CiaInterface[]>([])
    let [type,setType]=useState ('')
    let [params,setParams]=useState('')


    function setVariable(Category:string,food:string):void{

            setType(Category)
            setParams(food)
        
        
        }

         useEffect(()=>{
     getCiaApi(type,params)

 },[type,params])

 async function getCiaApi(typecat:string,typefood:string){

 let {data} =await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?${typecat}=${typefood}`)
 setDisplay(data.meals)
 console.log(disply);

 }


    return (

<AllCatDataContext.Provider value={{params,type,setVariable,disply}} >
    {props.children}
</AllCatDataContext.Provider>
        )
    




}
