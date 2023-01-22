import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./machine.css"

const WasgingMachine = () => {

    const navigate=useNavigate()

    const[data,setData]=useState([])

      useEffect(()=>{
        axios.get("https://splendid-bear-cap.cyclic.app/products/washingmachine").then((res)=>{
            setData(res.data)
           
        })
         
           
      },[])
  return (
   
    <div className='ProductCss'>
     {
        data.length>0 && data.map((elem)=>(
         <div key={elem._id} className="onlycartcss">

         <div onClick={()=>navigate(`/washingmachine/${elem._id}`)}>
         <img src={elem.image}  alt="shirt" />
       
         </div>
          
         <h1>{elem.product_name} </h1>
         <h1>{elem.brand}</h1>
         <h1>MRP:{elem.mrp} </h1>
         <h1 className='discountcss'>Discount:{elem.discount} </h1>
         <h1>Price:{elem.price} </h1>
         <h1 className='ratingcsss'>{"Rating :"}{elem.rating}</h1>
        
         
        

         </div>
      ))
     }
       
   </div>
  )
}

export default WasgingMachine



