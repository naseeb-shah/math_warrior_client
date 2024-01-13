import { Box, Button, Center, Input, Text } from "@chakra-ui/react";
import { numToString } from "../utils/numtoString";
import { useState,useEffect } from "react";
import CongratulationsMessage from "./congratulationsMessage";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../redux/actionType"
import { getProblem } from "../utils/api";
export const ProblemCard = ({type}) => {
    const dispatch=useDispatch()
   
    
    const problem= useSelector((state)=>state.problem)
    
    const [answer,setAnswer]=useState(0)
    const [congratulations,setCongratulations]=useState(false)
    
    
  let line2 = `${problem?.type} ${problem?.num2?numToString(problem?.num2||0):0}`;




  const [problemNumber,setProblemNumber]=useState(problem?.number||1)
const onProblemSubmit=()=>{
    const ans= eval(`${problem?.num}${problem?.type}${problem?.num2}`)
    console.log(ans,answer)
    if(ans==answer){
        setProblemNumber(problemNumber+1)
setCongratulations(true)
    }
    
     
}

useEffect(()=>{
    async function getdata(){
        try{
            
            
            dispatch({type:action.ProblemRequest})
            let data=  await getProblem(problemNumber,type,problem?.digit||4)
            dispatch({type:action.ProblemRequestSuccess,payload:data})
            
        }catch(e){
            dispatch({type:action.ProblemRequestReject,payload:e})
        }
        
    }
    getdata()
},[problemNumber])







  return (
    <Center>
     { congratulations&& <CongratulationsMessage/>}
    { problem?.num2&& <Box
        borderBottom={2}
        borderColor={"red"}
        textAlign={{ base: "center", md: "right" }}
        p={4}
        width={{ base: "90%", md: "50%" }}
      >
        <Text fontWeight={800} fontSize={{ base: 20, md: 30 }} mb={4} textAlign={"right"}>
          {numToString(problem?.num)}
        </Text>
        <Text fontWeight={800} fontSize={{ base: 18, md: 30 }} mb={4} textAlign={"right"}>
          {line2}
        </Text>

        <Input
          textAlign={'right'}
          placeholder="Your answer here"
          style={{ width: '100%' }}
          type={"number"}
          onChange={(e)=>setAnswer(e.target.value)}
        />
        <Button
          alignSelf={'center'}
          mt={4}
          textAlign="center"
          width={{ base: '100%', md: 'auto' }}
          onClick={() =>onProblemSubmit()}
        >
          Submit
        </Button>
      </Box>}
    </Center>
  );
};
