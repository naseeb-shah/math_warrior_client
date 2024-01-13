import { Heading } from "@chakra-ui/react"
import { ProblemCard,Center } from "../components/problemcard"
import { useNavigate } from "react-router-dom"
import { getToken } from "../utils/api"

const  ProblemPage=()=>{
    const navigate=useNavigate()
    let token= getToken()
    if (!token) {
      // Redirect to login if token is not available
      return navigate("/login")
    }
    return      <>  
    <Heading color={'goldenrod'}>Multiplication</Heading>
     <ProblemCard type={"*"}  ></ProblemCard>
    </>

}
export default ProblemPage 

