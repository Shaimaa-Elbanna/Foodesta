import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AllMealStamp from '../AllMealStamp';
import { Meals } from '../MealInterface';

export default function Home() {
const[meals,setmeals]=useState<Meals[]>([])
async function getMeals()
{
  let {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
  setmeals(data.meals)
}
useEffect(()=>{
  getMeals()
},[])

  return (


    <>
     <section className="     homeMainSection d-flex">
        <div className=" container ">
          
            <div className="home py-5">

                <div className="row py-5 shadow g-3" id="homeMeals">


{meals.map((meal,i)=>
<div className="col-md-3 shadow" key={i}>
  <AllMealStamp mealX={meal} />
</div>
)}
                    
            


                </div>
            </div>
      
        </div>
    </section>
    </>
  )
}
