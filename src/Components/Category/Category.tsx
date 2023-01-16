import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {  CategoryInterface } from './CategoryInterface'

export default function Category() {
  let[cat,setCat]=useState<CategoryInterface[]>([])

  useEffect(()=>{

    getCat()
  },[])


  async function getCat () {

    let {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    setCat(data.categories)

    
  }
  return (
    <>
      <div className="container  " id="Container">
    <div className="home ">
        
        <div className="row py-5 catMeals g-3" id="catfilterdMeals">
    
    {cat.map((cat,i)=> 
    
     <div className="col-md-3 col-sm-6 shadow-lg  p-3 " key={i}>
      <Link to={'/certainCat/'+ cat.strCategory}>
     <div id="CatItem " className="Item  position-relative">
         <img src={cat.strCategoryThumb} className="w-100 homeItemImg" />
         <div className="ItemOverly  position-absolute text-center" > 
             <h4 className="ms-2 ">{cat.strCategory}</h4>
             <p className="overflow-hidden">{cat.strCategoryDescription}.</p>
         </div>
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
