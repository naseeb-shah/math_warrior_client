import { Box, Button, Center, Input, Text } from "@chakra-ui/react";
import { numToString } from "../utils/numtoString";
import { useState,useEffect } from "react";
import CongratulationsMessage from "./congratulationsMessage";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../redux/actionType"
import { getProblem ,wrongProblem} from "../utils/api";
import { useToast } from '@chakra-ui/react'
export const ProblemCard = ({type}) => {
    const dispatch=useDispatch()
    const toast = useToast()

    
    const problem= useSelector((state)=>state.problem)
    
    const [answer,setAnswer]=useState(0)
    const [correct,setCorrect]=useState(false)
    const [congratulations,setCongratulations]=useState(false)
    
    
  let line2 = `${problem?.type=='*'?"X":problem?.type} ${problem?.num2?numToString(problem?.num2||0):0}`;




  const [problemNumber,setProblemNumber]=useState(problem?.number||1)
const onProblemSubmit=async()=>{
    const ans= eval(`${problem?.num}${problem?.type}${problem?.num2}`)
    console.log(ans,answer)
    if(ans==answer){
      setCorrect(true)
        setProblemNumber(problemNumber+1)
setCongratulations(true)
    }else{
       await wrongProblem(problem)
       toast({
        title: 'Wrong Answer.',
        description: "Please try Again",
        status: 'warning',
        duration: 9000,
        isClosable: true,
      })
       
    }
    
    setCongratulations(false) 
}

useEffect(()=>{
    async function getdata(){
        try{
            
            
            dispatch({type:action.ProblemRequest})
            let data=  await getProblem(problemNumber,type,problem?.digit||4,correct)
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
        <Text>Problem Number : {problemNumber}</Text>
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
