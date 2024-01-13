import axios from "axios"

const baseurl="https://math-warrior.vercel.app/math/"

export const registerUser=async(data)=>{
   try{
     const res= await  axios.post(`${baseurl}auth/register`,data
      )
      
      return res.data.data


   }catch(e){
      console.log(e)
 
   }

}
export const logIn=async(data)=>{
   try{
     const res= await  axios.post(`${baseurl}auth/login`,data
      )
      
      return res.data.data


   }catch(e){
      console.log(e)
 
   }

}


 export const  getProblem= async(num,type,digit)=>{
    try{
const url=`${baseurl}/problem/${type}/${num}/${digit}`
    
   const data= await  axios.get(url)
   return data.data.data}
   catch(e){
    console.error(e)
   }
}