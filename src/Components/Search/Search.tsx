import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AllMealStamp from '../AllMealStamp';
import { Meals } from '../MealInterface';

export default function Search() {

let [search,setMeal]=useState<Meals[]>([])
let [Sname,setName]=useState<string>()
let[sLetter,setLetter]=useState<string>('')





useEffect(()=>{
  getMealBySearch(Sname)
  
},[Sname])

function getSearchNAme(e:any){
  
  setName(e.target.value)
}
// function getSearchLetter(e:any){
//   console.log(sLetter);
  
//   setLetter(e.target.value)
// }

  async function getMealBySearch(name:string='Arr'){

    let {data}= await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    console.log(search);
    if(data.meals.length>= 0 ){
      setMeal(data.meals)

    }
else{
  setMeal([])
}
    
  }

  return (
    <>
  <div className="container mt-5">
            <div  className="searchInputs text-center m-auto col-5 d-flex justify-content-around pb-5 pt-">
                <input type="text" name="nameSearch" onChange={getSearchNAme}  className=" form-control text-center  py-2 mx-2 "
                    placeholder="Search By Name"/>
                {/* <input type="text" name="FirsLetterSearch" 
                    className=" mx-2 py-2 text-center  text- form-control " pattern='/[A-Za-z]/' maxlength={1} onChange={getSearchNAme} placeholder="Search By Firs Letter"/> */}

            </div>
            <div className="searchEnd "></div>

            <div className="home py-5">

<div className="row py-5 shadow g-3" >

{search.map((meal:Meals|any,i:number)=>

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
