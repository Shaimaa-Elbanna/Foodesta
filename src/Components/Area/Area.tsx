import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { AllCatDataContext } from '../../AllCatDataContext';

export default function Area() {

type areaPage={
  strArea: string;

}


const[area,setArea]=useState<areaPage[]>([])

let setFunction = useContext (AllCatDataContext)
async function getArea(){


  let{data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)

  setArea(data.meals)
  
}

useEffect(()=>{
  getArea()
},[])

  return (
    <>
    
    <div className="container  " id="Container">
    <div className="home ">
        
        <div className="row py-5 catMeals g-3" id="catfilterdMeals">

        {area.map((area,i)=> 
            <div className="col-md-3 col-sm-6 shadow-lg  p-3 allArea " key={i} >
      <Link to={'/certainArea/'+ area.strArea}  onClick={()=>{setFunction?.setVariable("a",area.strArea)}}>

              
            <div className="district text-center" >
                <i className="fa-solid text-warning fa-city fa-3x " ></i>
                <h2 className="text-dark">{area.strArea}</h2>
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
