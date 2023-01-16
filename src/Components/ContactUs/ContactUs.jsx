import axios from 'axios'
import Joi from 'joi'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ContactUs() {


// type elementProp={
//     event.currentTarget:HTMLElement ;

// }
// type userRegsterData={
//     first_name:string,
//     last_name:string,
//     email:string,
//     password:string,
//     age:number
// }


let Navigate =useNavigate()

let [userData,setUserData]=useState(
    {
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        age: ""
        }
)
const[apiErr,setApiErr]=useState()
const[FnErr,setFnErr]=useState()
const[LnErr,setLnErr]=useState()
const[passErr,setpassErr]=useState()
const[emailErr,setemailErr]=useState()
const[ageErr,setageErr]=useState()






function getUserData(e){
 userData={...userData}
    
userData[e.target.name]=e.target.value
setUserData(userData)
console.log(userData);
}

function validation(){
    let scheme=Joi.object({
        first_name:Joi.string().min(2).max(15).alphanum().required(),
        last_name:Joi.string().min(2).max(15).alphanum().required(),
       password:Joi.string().pattern(new RegExp(('^[A-Z][a-z]{2,5}[1,9]?$'))).required(),
email:Joi.string().email({tlds:{allow:["com","net"]}}).required(),
age:Joi.number().min(18).max(50).required()
    })
    return scheme.validate(userData,{abortEarly:false})
}

async function keepUserData() {

    let {data}=await axios.post(`https://sticky-note-fe.vercel.app/signup`,userData)
   
 if(data.message ==="success"){

    Navigate('/signIn')
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


       
   
        valid.error.details.forEach( (el)=>{
            if(el.path[0]==='password'){
              setpassErr(el.message)
            }
          } )
          // FirstNAme VAlid 
          valid.error.details.forEach( (el)=>{
            if(el.path[0]==="first_name"){
              setFnErr(el.message)
            }
          })
      // LastNAme VAlid 
      valid.error.details.forEach((el)=>{
       if( el.path[0]=== "last_name"){
        setLnErr(el.message)
      
       }
      })
      // Age valid 
      valid.error.details.forEach((el)=>{
      
        if(el.path[0]==="age"){
          setageErr(el.message)
        }
      
      })
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
                            <input onChange={getUserData} type="text" placeholder="Enter your first name" className="contactUsControl1 form-control   shadow-lg is-valid    text-center"  name='first_name' />
                            <div className="warningLable1 text-center m-auto p-2 my-1">
                            {FnErr?  <p className="text-muted p-2">  {FnErr}  
                            </p>:<p className="text-muted p-2"> Special Characters and Numbers not allowed</p> }  

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6   ">
                        <div className="inputBody m-auto ">
                            <input onChange={getUserData} type="text" placeholder="Enter your last name" className="contactUsControl2 form-control   shadow-lg is-valid    text-center" name='last_name'/>
                            <div className="warningLable1 text-center m-auto p-2 my-1">
                           
                              {LnErr?<p className="text-muted p-2">  {LnErr} </p>: <p className="text-muted p-2">Special Characters and Numbers not allowed</p>
                           }

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6    ">
                        <div className="inputBody ">
                            <input onChange={getUserData} type="text" placeholder="Enter your email" className="contactUsControl3 form-control   shadow-lg is-valid    text-center" name='email'/>
                            <div className="warningLable1 text-center m-auto p-2 my-1" />

                        {emailErr?   <p className="text-muted p-2">  {emailErr} </p>:<p className="text-muted p-2">Enter valid email. *Ex: xxx@yyy.zzz </p>
                
               }   
                               
                            </div>
                        </div>
                  
                    <div className="col-md-6    ">
                        <div className="inputBody m-auto ">
                            <input onChange={getUserData} type="text" placeholder="Enter your age" className="contactUsControl4 form-control   shadow-lg is-valid    text-center" name='age'/>
                            <div className="warningLable1 text-center m-auto p-2 my-1">
                     {ageErr?    <p className="text-muted p-2">{ageErr}</p> :<p className="text-muted p-2">Enter valid Age (18-50)</p>}
                
                      
                            </div>
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
                    <div className="col-md-6   ">
                        <div className="inputBody m-auto ">
                            <input onChange={getUserData} type="text" placeholder="Enter your phone number" className="contactUsControl6 form-control   shadow-lg is-valid    text-center"/>
                            <div className="warningLable1 text-center m-auto p-2 my-1">
                               <p className="text-muted p-2">Enter valid Phone Number
                
                            </p></div>
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
