import { ProblemCard } from "../components/problemcard"

import { Heading } from "@chakra-ui/react"

import { useNavigate } from "react-router-dom"
import { getToken } from "../utils/api"
const  ProblemPage=()=>{
    const navigate=useNavigate()
    let token= getToken()
    if (!token) {
      // Redirect to login if token is not available
      return navigate("/login")
    }
    return    <> <Heading>ADDITION</Heading>    <ProblemCard type={"+"}  ></ProblemCard></>

}
export default ProblemPage 

