import {
    GET_SHIRT_REQUEST,
    GET_SHIRT_SUCCESS,
    GET_SHIRT_ERROR} from "./actionType";
  
 import axios from "axios";






 const getShirtRequest=()=>{
    return {
          type:GET_SHIRT_REQUEST
    }
 }   

 
 const getShirtSuccess=(payload)=>{
    return {
          type:GET_SHIRT_SUCCESS,
          payload
    }
 }   

 
 const getShirtError=()=>{
    return {
         type:GET_SHIRT_ERROR
    }
 } 
 
     const getShirt=()=>(dispatch)=>{
              dispatch(getShirtRequest())
                    return axios.get("http://localhost:4500/products/tv").then((res)=>{
                    dispatch(getShirtSuccess(res.data))
                   console.log(res.data)
     }).catch((err)=>dispatch(getShirtError()))
 }
 

 export {getShirt}



 