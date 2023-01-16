import React, { useState } from 'react';
import './App.css';
import{createHashRouter,RouterProvider} from 'react-router-dom'
import MainLayout from './Components/MainLayout/MainLayout'
import Home from './Components/Home/Home'
import Search from './Components/Search/Search'
import Area from './Components/Area/Area'
import Category from './Components/Category/Category'
import Ingredient from './Components/Ingredient/Ingredient'
import ContactUs from './Components/ContactUs/ContactUs'
import SignIn from './Components/SignIn/SignIn'
 import Regester from './Components/Regester/Regester'
import NotFound from './Components/NotFound'
import MealDetails from './Components/MealDetails/MealDetails';
import CertainCat from './Components/Category/CertainCat';
import CertainIngredient from './Components/Ingredient/CertainIngredient';
import CertainArea from './Components/Area/CertainArea';
import { AllDataContextProvider } from './AllCatDataContext';
import OrderNow from './Components/OrderNow/OrderNow';
import jwt_decoded from 'jwt-decode'

function App() {
// type tokenProps={
//   tokenData:()=>void

// }



  let[userToken,setToken]=useState()
  if(localStorage.getItem("token")!== null){
    // saveUserTokenData()
  }

// 

function saveUserTokenData(){

  let token =localStorage.getItem("token")
  let decodedToken = jwt_decoded(token)

setToken(decodedToken)
console.log(decodedToken);
}

function ProtectedRoute(){

  
}


const router = createHashRouter([
  {path:'/',element:<MainLayout/>,children:[
    {path: 'home',element:<Home/>},
    {path: '/',element:<Home/>},
    {path: 'mealDetails/:id',element:<MealDetails/>},

    {
      path: 'certainCat/:type',element:<CertainCat/>
    
    },
    {      path: 'certainIng/:ing',element:<CertainIngredient/>
  },
    {  path: 'certainArea/:area',element:<CertainArea/>},
    {path: 'area',element:<Area/>},
    {path: 'search',element:<Search/>},
    {path: 'category',element:<Category/>},
    {path: 'ingredient',element:<Ingredient/>},
    {path: 'regester',element:<Regester/>},
    {path: '*',element:<NotFound/>},
    {path: 'contactUs',element:<ContactUs/>},
    {path: 'orderNow',element:<OrderNow/>},
    {path: 'signIn',element:<SignIn saveUserTokenData={saveUserTokenData}  />},
  ]}
])


  return (
 <>
 <AllDataContextProvider>
 <RouterProvider router={router}/>
 </AllDataContextProvider>
 </>
 )
}

export default App;
