import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AllMealStamp from '../AllMealStamp'
import { Meals } from '../MealInterface'

export default function CertainCat() {
    let{type}=useParams()
    let[certainCat,setCertain]=useState<Meals[]>([])

    useEffect(()=>{
        getCertainCat(type)

    },[])

async function getCertainCat(typecat:string='Beef'){

    let {data} =await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${typecat}`)
    setCertain(data.meals)
    console.log(certainCat);
    
}


  return (
    <>
    <div className=" container ">
          
          <div className="home py-5">

              <div className="row py-5 g-3 shadow" id="homeMeals">


{certainCat.map((meal,i)=>
<div className="col-md-3 shadow" key={i}>
<AllMealStamp mealX={meal} />
</div>
)}
                  
          


              </div>
          </div>
    
      </div>
    </>
  )
}
