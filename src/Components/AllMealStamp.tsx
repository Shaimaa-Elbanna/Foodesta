import React from 'react'
import { Link } from 'react-router-dom';
import { Meals } from './MealInterface';





interface ChildMeal{
  mealX:Meals
}

export default function AllMealStamp({mealX}:ChildMeal) {
  return (
    <>
    <Link to={'/mealDetails/'+ mealX.idMeal} >
        <div id="homeItem"  className="Item shadow position-relative">
            <img src={mealX.strMealThumb} className="w-100 homeItemImg" alt=""/>
            <div id={mealX.idMeal} className="ItemOverly  position-absolute d-flex align-items-center">
                <h3 className="ms-2 ">{mealX.strMeal}</h3>

            </div>
      
    </div>
    </Link>
    </>
  )
}
