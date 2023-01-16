

import React, { useContext, useState } from 'react'
 import './navbar.css'
 import brand from '../../img/logo.png'
import { Link, NavLink, useParams } from 'react-router-dom'
import { AllCatDataContext } from '../../AllCatDataContext'

export default function Navbar() {


let [close,setBar]=useState(true)
  function CloseBar(){
    setBar(false)

  }
  function openBar(){
    setBar(true)

  }


  return (
    <>
    
       <div className=' side-bar d-flex '>
{close? (   <div className="d-none bg-danger     innerSide  ">
     <div className="navbar container ">
       <ul className="navbar-nav m-auto mt-1 mb-2 mb-lg-0 text-center my-4 "> 
 <li className="nav-item"> 
 <NavLink className="nav-link " to='search' >Search</NavLink> 

 </li> 
 <li className="nav-item"> 
 <NavLink className="nav-link" to='category' >Category</NavLink> 

 </li> 
 <li className="nav-item"> 
 <NavLink className="nav-link" to='ingredient'  >Ingredient</NavLink> 

 </li> 
 <li className="nav-item"> 
 <NavLink className="nav-link" to='area' >Area</NavLink> 

 </li> 
 <li className="nav-item"> 
 <NavLink className="nav-link  px-4" to='contactUs' > Contact Us</NavLink> 

 </li> 
 <li className="nav-item"> 
 <NavLink className="nav-link  px-4" to='signIn' > Login </NavLink> 

 </li> 
 <li className="nav-item"> 
 <NavLink className="nav-link  px-4" to='orderNow' > orderNow</NavLink> 

 </li> 
 {/* <li className="nav-item"> 
 <NavLink className="nav-link  px-4" to='signIn' > sign In</NavLink> 

 </li> 
 <li className="nav-item"> 
 <NavLink className="nav-link" to='orderNow' >Orders</NavLink> 

 </li>  */}
 </ul> 


     <div className="container">
     <div className="  nav-icon  mt-3  ">
         <i className="fab fa-facebook fa-lg mx-2  "></i>
         <i className="fab fa-twitter fa-lg mx-2 "></i>
         <i className="fas fa-globe fa-lg mx-2 "></i>
         </div>
         <div>  
         <p className="text-muted text-center">Copyright Â© 2019 All Rights Reserved.
</p>
         </div>
 
     </div>
 
 </div> 



        </div>): (  <div className="d-flex  bg-warning    innerSide  ">
     <div className="navbar container ">
       <ul className="navbar-nav m-auto mt-1 mb-2 mb-lg-0 text-center my-4 "> 
 <li className="nav-item"> 
 <NavLink className="nav-link " to='search' >Search</NavLink> 

 </li> 
 <li className="nav-item"> 
 <NavLink className="nav-link" to='category' >Category</NavLink> 

 </li> 
 <li className="nav-item"> 
 <NavLink className="nav-link" to='ingredient' >Ingredient</NavLink> 

 </li> 
 <li className="nav-item"> 
 <NavLink className="nav-link" to='area' >Area</NavLink> 

 </li> 
 <li className="nav-item"> 
 <NavLink className="nav-link  px-4" to='contactUs' > Contact Us</NavLink> 

 </li> 
 <li className="nav-item"> 
 <NavLink className="nav-link  px-4" to='signIn' > Login </NavLink> 

 </li> 
 <li className="nav-item"> 
 <NavLink className="nav-link  px-4" to='orderNow' > orderNow</NavLink> 

 </li> 
 {/* <li className="nav-item"> 
 <NavLink className="nav-link" to='userOrder' >Orders</NavLink> 

 </li>  */}
 </ul> 


     <div className="container">
     <div className="  nav-icon  mt-3  ">
         <i className="fab fa-facebook fa-lg mx-2  "></i>
         <i className="fab fa-twitter fa-lg mx-2 "></i>
         <i className="fas fa-globe fa-lg mx-2 "></i>
         </div>
         <div>  
         <p className="text-muted text-center">Copyright Â© 2019 All Rights Reserved.
</p>
         </div>
 
     </div>
 
 </div> 



        </div>)}






        <div className="outer-side bg-light d-flex  flex-column justify-content-around align-items-center">
<Link to='home '>
<img src={brand} className="w-75 mt-3 mx-2 " alt=""/>

</Link>
            <div className=" m-auto  ">


                <div className=" mt-5">
                  {close?(<button  className='btn btn-transparent' onClick={CloseBar}><i className="fa fa-align-justify siderToggleIcon fa-xl closeI siderToggleIcon text-dark"></i></button>):( <button className='btn btn-transparent' onClick={openBar}> <i className="fa fa-align-justify fa-times fa-xl openI text-dark" ></i>
                    </button>)}

                    {/* <a href="#" onClick={CloseBar}> <i className="fa fa-align-justify siderToggleIcon fa-xl openI text-dark" ></i>
                    </a>
                    <a href="#"  onClick={openBar}><i className="fa fa-align-justify fa-times fa-xl closeI siderToggleIcon text-dark"></i></a> */}
                </div>
            </div>
            <div className="d-flex flex-column m-auto  ">

                <a href="#" className="py-3"> <i className="fas fa-globe text-dark"></i>
                </a>
                <a href="#" className="py-3>"> <i className="fas fa-share-alt text-dark"></i>
                </a>
            </div>
        </div>
        </div>


    </>
  )
}
