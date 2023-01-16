import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { AllCatDataContext } from '../../AllCatDataContext'
export default function CertainIngredient() {
  let IntgData =useContext(AllCatDataContext)






  return (
    <>
    {IntgData?    
    
    <div className=" container ">
          
    <div className="home py-5">

        <div className="row py-5 g-3 shadow" id="homeMeals">


{IntgData?.disply.map((meal,i)=>
<div className="col-md-3 shadow" key={i}>

<Link to={'/mealDetails/'+ meal.idMeal} >
  <div id="homeItem"  className="Item shadow position-relative">
      <img src={meal.strMealThumb} className="w-100 homeItemImg" alt=""/>
      <div id={meal.idMeal} className="ItemOverly  position-absolute d-flex align-items-center">
          <h3 className="ms-2 ">{meal.strMeal}</h3>

      </div>

</div>
</Link>
</div>

)}
            
    


        </div>
    </div>

</div>
    :
     " "}
 
 
    </>
)}
