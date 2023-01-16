import axios from 'axios'
import Joi from 'joi'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function SignIn({saveUserTokenData}) {



  let Navigate =useNavigate()

let [userData,setUserData]=useState(
    {
       
        email:"",
        password:"",
   
        }
)
const[apiErr,setApiErr]=useState()

const[passErr,setpassErr]=useState()
const[emailErr,setemailErr]=useState()


function getUserData(e){
  userData={...userData}
     
 userData[e.target.name]=e.target.value
 setUserData(userData)
 console.log(userData);
 }
 
 function validation(){
     let scheme=Joi.object({
       
        password:Joi.string().pattern(new RegExp(('^[A-Z][a-z]{2,5}[1,9]?$'))).required(),
 email:Joi.string().email({tlds:{allow:["com","net"]}}).required(),
     })
     return scheme.validate(userData,{abortEarly:false})
 }
 
 async function keepUserData() {
 
     let {data}=await axios.post(`https://sticky-note-fe.vercel.app/signin`,userData)
    console.log(data.token);
  if(data.message ==="success"){

    localStorage.setItem("token",data.token)
    
    saveUserTokenData()
    Navigate('/orderNow')

 }
  else{
     setApiErr(data.message)
  }
 }
 
 function CheckValidation(e){
     e.preventDefault()
     let valid =validation()
     console.log(valid);
 
     if (valid.error == null){
         keepUserData()
     }
     else{
 
 
         // valide.error.details.forEach((ele)=>{
         //     if(ele.path[0] === "first-name"){
         //         setApiErr(ele.message)
         //     }
 
         //     else if (ele.path[0]==='last-name'){
         //         setLnValid(ele.message)
         //     }
         //     else if (ele.path[0]==='password'){
         //         setpassValid(ele.message)
         //     }
         //     else if (ele.path[0]==='age'){
         //         setageValid(ele.message)
         //     }
         //     else if (ele.path[0]==='email'){
         //         setemailValid(ele.message)
         //     }
            
         // })
    
         valid.error.details.forEach( (el)=>{
             if(el.path[0]==='password'){
               setpassErr(el.message)
             }
           } )
           // FirstNAme VAlid 
         
      
       // email VAlid 
       
       valid.error.details.forEach((el)=>{
         if(el.context.key==='email'){
           setemailErr(el.message)
         }
       })
       
     
     
     
          
         }
     
         
        
 
 
 
 
 }
 
 
 
 
 
 
 
   return (
     <>
     
     <section className="  bg-black  py-5 bg-white"  >
         <div className=" container ">
         <div className="home  col-md-8 m-auto  my-5" >
             <div className="shadow text-center   ">
                 <h2 className="py-4 text-muted ">Contac Us...
                 </h2>
                 <div className="container">
                 <form onSubmit={CheckValidation}>
                 <div className="row  g-3   " >
                     
                     <div className="col-md-6    ">
                         <div className="inputBody ">
                             <input onChange={getUserData} type="text" placeholder="Enter your email" className="contactUsControl3 form-control   shadow-lg is-valid    text-center" name='email'/>
                             <div className="warningLable1 text-center m-auto p-2 my-1" />
 
                         {emailErr?   <p className="text-muted p-2">  {emailErr} </p>:<p className="text-muted p-2">Enter valid email. *Ex: xxx@yyy.zzz </p>
                 
                }   
                                
                             </div>
                         </div>
                   
                  
                     <div className="col-md-6    ">
                         <div className="inputBody ">
                             <input onChange={getUserData} type="password" placeholder="Enter your password" className="contactUsControl6 form-control   shadow-lg is-valid    text-center" name='password'/>
                             <div className="warningLable1 text-center m-auto p-2 my-1">
                              {passErr? <p className="text-muted p-2"> {passErr}  </p>:<p className="text-muted p-2">Enter valid password *Minimum eight characters, at least one letter and one number</p>
                 
               }  
                             </div>
                         </div>
                     </div>
                   
                     {apiErr? <div className='alert alert-primary'> {apiErr}</div>:""}
 
                     <div><button className="btn btn-outline-danger my-2" type='submit' > Submit</button></div> 
                     </div>
                 </form>
             
                 
                 </div>
                
 
                 </div>
               
                        
 
                
                
                 
             </div>
 
         </div>
 </section>
     </>
   )
 }
 