import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { MealDetailsInterface } from './MealDetailInterface';

export default function MealDetails() {
    let {id}=useParams()
    let[details,setDetails]=useState<MealDetailsInterface[]>([])

    useEffect(()=>{

        getDetails(id)
    }
    ,[])

async function getDetails(mealId='52977'){

    let {data}= await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    setDetails(data.meals)
    
}









  return (
    <>

      <div className="innerbox row g-5 py-5 bg-black " id="innerboxIdMeal ">
      {details.map((details)=>
      
<div className="col-md-5 offset-md-1 col-sm-12">

<img src={details.strMealThumb} className="w-100" alt="" id="popUpImg"/>
</div>
      )}


{details.map((details)=>

<div className="col-md-6 col-sm-12">
    <h3 className="text-white" id="popUpMealName">{details.strMeal}</h3>
    <p id="popUpMealDescip" className="text-white">{details.strInstructions} </p>

    <div className="d-flex"><span id="popUpInnerArea" className="bolder text-white px-2">Area: </span>
        <p className="text-white" id="popUpArea"> {details.strArea}</p>
    </div>

    <div className=" d-flex "><span id="popUpInnerCat" className="bolder text-white px-2">Category:</span>
        <p className="text-white" id="popUpCat"> {details.strCategory}</p>
    </div>
    <h4 className="text-white"> Recipes :
    </h4>
    <div className="homePopupResipes py-3 px-2">
        <span id="popUprecipe" className="badge text-bg-light p-2">Light</span>

    </div>
    <h4 className="text-white"> tages :
    </h4>
    <div className="homePopuptags py-3 px-2">
        <span id="popupTags" className="badge text-bg-light p-2">{details.strTags}</span>

    </div>
   
</div>
 )}

</div>
    </>
  )
}
