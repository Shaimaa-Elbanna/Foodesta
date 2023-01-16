import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AllCatDataContext } from '../../AllCatDataContext';

export default function Ingredient() {
  let setFunction = useContext (AllCatDataContext)

type IngredientPage={
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
  strType?: any;
}
  let[ingrediant,setingrediant]=useState<IngredientPage[]>([])

  useEffect(()=>{

    getingrediant()
  },[])


  async function getingrediant () {

    let {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    setingrediant(data.meals)

    
  }
  return (
    <>
    <div className="container  " id="Container">
    <div className="home ">
        
        <div className="row py-5 catMeals g-3" id="catfilterdMeals">


          {ingrediant.map ((ingr,i)=>
           <div className="col-md-3 col-sm-6 shadow-lg  p-3 "key={i}>
          ce
      <Link to={'/certainIng/'+ ingr.strIngredient} onClick={()=>{setFunction?.setVariable("i", ingr.strIngredient)}}>

           <div className="mainIngrediant text-center">
               <i className="fa-solid fa-bowl-food fa-3x text-warning"></i>
               <h3 className="text-dark" id="">{ingr.strIngredient}</h3>
               <p className="text-dark overflow-hidden">{ingr.strDescription?.split(' ').splice(0,20).join(" ")}</p>
           </div>

           </Link>
       </div>
          )}
    </div>
    </div>
    </div>
    
    </>
  )
}
